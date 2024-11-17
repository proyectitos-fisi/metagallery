create table filetype (
    code integer unique primary key not null,
    name text unique not null
);

create table file (
    id integer unique primary key autoincrement not null,
    owner integer not null references user (id),
    type integer not null references filetype (code),
    path text unique not null,
    filename text not null,
    title text,
    description text,
    ext text not null,
    hashed integer not null,
    size real not null,
    deleted integer not null
);

create table tier (
    id integer unique primary key not null,
    name text unique not null
);

create table user (
    id integer unique primary key autoincrement not null,
    tier integer not null references tier (id),
    displayname text not null,
    username text unique not null,
    mail text not null,
    bpasswd text not null
);

create table avatar (
    user integer not null references user (id),
    file integer not null references file (id)
);

create table gallery (
    id integer unique primary key autoincrement not null,
    owner integer not null references user (id),
    -- ******slug         (pedir al crear galería)
    -- ******template_fk  (pedir al crear galería)
    title text not null,
    description text,
    deploy_stage integer not null,
    url text unique not null
);

create table template (
    id integer unique primary key autoincrement not null,
    tier integer not null references tier (id),
    thumbnail integer not null references file (id),
    res integer not null references file (id),
    title text not null,
    description text not null
);

-- casafugaz.metatemplate
-- - escenario 3d (.blend, .obj)
-- - slots -> slot: ref=10 type=3d (.json)
-- - topdown_view (.svg)

-- Crear galería a partir de template t:
-- - select * from template where id = t;
-- - template = file.Open(res)
-- - parsear template -> escenario, *slots, topdown
-- - INSERT gallery;
-- - for slot of slots INSERT galleryslot;

-- Saber cómo renderizar la galería
-- - slots (.json)
-- - topdown_view (.svg)
-- GET gallery/2d/casa-fugaz
-- - select * from gallery where slug = 'casa-fugaz' join template;
-- - template = file.Open(res)
-- - parsear template -> escenario, *slots, *topdown
-- - return json

-- GET gallery/3d/casa-fugaz
-- - slots (.json)
-- - topdown_view (.svg)
-- - lo mismo

create table galleryslot (
    gallery integer not null references gallery (id),
    slot_ref integer not null, -- inmutable
    res integer references file (id),
    title text not null,
    description text not null
);

insert into
    filetype
values
	(0, 'image'),
    (1, 'video'),
    (2, 'object3d');

insert into
    tier
values
	(0, 'free'),
    (1, 'van gogh'),
    (2, 'picasso');

insert into
    user (tier, displayname, username, mail, bpasswd)
values
    (0, 'admin', 'admin', '', 'skibidi pana');

