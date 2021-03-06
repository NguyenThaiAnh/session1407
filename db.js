const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: '123',
    database: 'Node1407',
    host: 'localhost',
    port: 5432,
    max: 20
});

function queryDb(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                // return result;
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });        
    });
}

module.exports = queryDb;