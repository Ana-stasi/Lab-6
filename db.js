const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'app.db'

const DB = new sqlite3.Database(DB_PATH);

DB.serialize(() => { //создаем бд
    DB.run("CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY UNIQUE, owner TEXT, model TEXT, number TEXT)");
})

module.exports = DB;