const pg = require('pg');

const pool = new pg.Pool({
    user: 'unixctvafkardi',
    host: 'ec2-54-75-246-118.eu-west-1.compute.amazonaws.com',
    database: 'd11qcci7olcrf8',
    password: 'dece8a47e30aff10128c8e1da6b734865334b9155e2c533bb0122ca8a57fe984',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

async function getFromDb(query, callback) {
    await pool.query(query, (err, res) => {
        try {
            callback(res.rows);
        } catch(err)  {
            console.log(err);
        }

    })
}

async function saveToDB(query, callback) {
    console.log(query)
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        } else {
            callback('ok');
        }
    })
}


module.exports = {getFromDb: getFromDb, saveToDB: saveToDB};
