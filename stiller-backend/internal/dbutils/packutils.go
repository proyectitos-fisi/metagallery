package dbutils

import (
	"bufio"
	"errors"
	"io"
	"log"
	"stiller/internal/templates"

	jsonexp "github.com/go-json-experiment/json"
	"github.com/leporo/sqlf"
	"zombiezen.com/go/sqlite"
	"zombiezen.com/go/sqlite/sqlitex"
)

func getSlot(gallery int, template_slot templates.MetatemplateSlot, conn *sqlite.Conn) StillerGallerySlot {
    new_slot := StillerGallerySlot{
        Ref:      template_slot.Ref,
        Type:     template_slot.Type,
        Props:    template_slot.Props,
        Vertices: template_slot.Vertices,
    }

    slotinfo_stmt := sqlf.
        Select("*").
            From("galleryslot").
        Where("slotid = ? and gallery = ?", new_slot.Ref, gallery)

    sqlitex.Execute(conn, slotinfo_stmt.String(), &sqlitex.ExecOptions{
        ResultFunc: func(stmt *sqlite.Stmt) error {
            new_slot.Title = stmt.GetText("title")
            new_slot.Description = stmt.GetText("description")
            new_slot.ResId = int(stmt.GetInt64("res"))
            return nil
        },

        Args: slotinfo_stmt.Args(),
    })


    return new_slot
}

func GetGallerySlots(gallery int, templatefile io.Reader) ([]StillerGallerySlot, error) {
    new_dbconn, dbconn_err := NewConn()
    if dbconn_err != nil {
        return nil, dbconn_err
    }

    defer CloseConn(new_dbconn)

    buftar := bufio.NewReader(templatefile)

    templatefile_slots := []templates.MetatemplateSlot{}
    slotunmarshal_exp := jsonexp.UnmarshalRead(buftar, &templatefile_slots, jsonexp.DefaultOptionsV2())
    if slotunmarshal_exp != nil {
        return nil, slotunmarshal_exp
    }

    gallery_slots := make([]StillerGallerySlot, 0, len(templatefile_slots))
    for index := range templatefile_slots {
        gallery_slots = append(
            gallery_slots,
            getSlot(gallery, templatefile_slots[index], new_dbconn),
        )
    }

    return gallery_slots, nil
}

func PushNewFile(fileptr *StillerFile) error {
    new_dbconn, dbconn_err := NewConn()
    if dbconn_err != nil {
        return dbconn_err
    }

    defer CloseConn(new_dbconn)

    query_stmt := sqlf.
        InsertInto("file").
            Set("owner", fileptr.OwnerId).
            Set("type", fileptr.Typeof).
            Set("path", fileptr.Path).
            Set("filename", fileptr.Filename).
            Set("ext", fileptr.Ext).
            Set("hashed", fileptr.Hashed).
            Set("size", fileptr.Size).
            Set("deleted", fileptr.Deleted).
        Returning("id")

    query := query_stmt.String()
    query_id_res := int(-1)

    exec_err := sqlitex.ExecuteTransient(new_dbconn, query, &sqlitex.ExecOptions{
        ResultFunc: func(stmt *sqlite.Stmt) error {
            if stmt.ColumnType(0) == sqlite.TypeText {
                log.Println(stmt.ColumnText(0))
                return errors.New("pushfile error")
            }

            query_id_res = int(stmt.ColumnInt64(0))
            return nil
        },

        Args: query_stmt.Args(),
    })

    if query_id_res == -1 {
        return errors.New("no new file was added")
    }

    if exec_err != nil {
        return exec_err
    }

    fileptr.Id = query_id_res
    return nil
}

