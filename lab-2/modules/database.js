let mysql = require('sync-mysql');

let base = new mysql({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'data_collection'
});

module.exports.init =  function() {
    base.query(
        `CREATE TABLE IF NOT EXISTS counters (
            id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
            name VARCHAR(64),
            resource VARCHAR(64)
        )`
    );
    base.query(
        `CREATE TABLE IF NOT EXISTS records (
            id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
            user VARCHAR(64)
        )`
    );
    base.query(
        `CREATE TABLE IF NOT EXISTS record_values (
            record_id INTEGER NOT NULL,
            counter_id INTEGER NOT NULL,
            value INTEGER
        )`
    )
};

module.exports.init_template = function(template) {
    base.query(
        'DELETE FROM counters WHERE id > 0'
    )
    for (let key of Object.keys(template)) {
        if ((key == 'name') || (key == 'resource')) continue;
        base.query(
            `INSERT INTO counters SET
                name = '${key}',
                resource = 'main'
            `
        )
    }
    for (let resource of template.resources) {
        for (let counter of Object.keys(resource)) {
            if (counter == 'name') continue;
            base.query(
                `INSERT INTO counters SET
                    name = '${counter}',
                    resource = '${resource.name}'
                `
            )
        }
    }
}