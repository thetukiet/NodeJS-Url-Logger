
/* Load modules */
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./log.db');

let init = function () {
    db.run("CREATE TABLE if not exists url (" +
        "id TEXT PRIMARY KEY," +
        " value TEXT" +
        ")");

    db.run("CREATE TABLE if not exists access_info (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " urlId TEXT," +
        " accessTime TEXT," +
        " hourlyTime TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};

