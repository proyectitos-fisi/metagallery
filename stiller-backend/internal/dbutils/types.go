package dbutils

type StillerFileType uint8
const (
    Image StillerFileType = iota
    Video
    Object3D
    Metatemplate
    UnreachableFileType
)

type StillerFile struct {
    Id          int             `json:"id"`
    OwnerId     int             `json:"ownerid"`
    Typeof      StillerFileType `json:"typeof"`
    Path        string          `json:"path"`
    Filename    string          `json:"filename"`
    Title       string          `json:"title"`
    Description string          `json:"description"`
    Ext         string          `json:"ext"`
    Hashed      bool            `json:"hashed"`
    Size        int             `json:"size"`
    Deleted     bool            `json:"deleted"`
}

type StillerTier uint8
const (
    Free StillerTier = iota
    VanGogh
    Picasso
    UnreachableTier
)

type StillerUser struct {
    Id          int         `json:"id"`
    TierId      StillerTier `json:"tierid"`
    Displayname string      `json:"displayname"`
    Username    string      `json:"username"`
    Mail        string      `json:"mail"`
    Bpasswd     string      `json:"bpasswd"`
}

type StillerTemplateBlock struct {
    Id          int     `json:"id"`
    TemplateId  int     `json:"template"`
    Posx        float64 `json:"posx"`
    Posy        float64 `json:"posy"`
    Direction   float64 `json:"direction"`
}

type StillerMetatemplatefile struct {
    Id   int
    Path string
}

type StillerTemplate struct {
    Id          int    `json:"id"`
    TierId      int    `json:"tier"`
    ThumbnailId int    `json:"thumbnail"`
    TemplateId  int    `json:"templatefile"`
    Title       string `json:"title"`
    Description string `json:"description"`
}

type StillerGallerySlot struct {
    Id          string `json:"id"`
    Res         int    `json:"res"`
    Title       string `json:"title"`
    Description string `json:"description"`
}

type StillerGallery struct {
    Id           int                  `json:"id"`
    OwnerId      int                  `json:"ownerid"`
    TemplateId   int                  `json:"templateid"`
    Slug         string               `json:"slug"`
    Title        string               `json:"title"`
    Description  string               `json:"description"`
    Slots        []StillerGallerySlot `json:"slots"`
}

