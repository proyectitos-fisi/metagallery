package userlogin

import (
	"log"
	"net/http"
	"stiller/internal/dbutils"
	"stiller/internal/handlers/handleutils"
	"stiller/internal/jwtutils"

	jsonexp "github.com/go-json-experiment/json"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
	"zombiezen.com/go/sqlite"
	"zombiezen.com/go/sqlite/sqlitex"
)


func NetHandler(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    type ReqPayload struct {
        Username string `json:"username"`
        Pwd      string `json:"pwd"`
    }

    payload := ReqPayload{}
    unmarshal_err := jsonexp.UnmarshalRead(r.Body, &payload, jsonexp.DefaultOptionsV2())
    if handleutils.RequestLog(unmarshal_err, "", http.StatusBadRequest, &w) {
        return
    }

    new_tk := jwtutils.Token{
        UserId: 0,
    }

    user_bpwd := string("")
    amount := int(0)
    query := `select id, bpasswd from user where username=?1;`

    new_dbconn, dbconn_err := dbutils.NewConn()
    if handleutils.RequestLog(dbconn_err, "", http.StatusInternalServerError, &w) {
        return
    }

    defer dbutils.CloseConn(new_dbconn)

    sqlitex.ExecuteTransient(new_dbconn, query, &sqlitex.ExecOptions{
        ResultFunc: func(stmt *sqlite.Stmt) error {
            amount++
            new_tk.UserId = int(stmt.GetInt64("id"))
            user_bpwd = stmt.GetText("bpasswd")
            return nil
        },
        Args: []any{
            payload.Username,
        },
    })

    if amount == 0 {
        handleutils.GenericLog(nil, "no user was found")
        w.WriteHeader(http.StatusNotFound)
        return
    }

    log.Println("uid:", new_tk.UserId)
    log.Println("pwd:", user_bpwd)

    cmp_err := bcrypt.CompareHashAndPassword([]byte(user_bpwd), []byte(payload.Pwd))
    if handleutils.RequestLog(cmp_err, "", http.StatusNotFound, &w) {
        return
    }

    sign_encoded, sign_err := new_tk.Encode()
    if handleutils.RequestLog(sign_err, "", http.StatusInternalServerError, &w) {
        return
    }

    w.Write(sign_encoded)
    w.WriteHeader(http.StatusOK)
}
