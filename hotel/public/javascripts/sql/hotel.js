const mysql = require('mysql');
const config = require('../../config/database');

const pool  = mysql.createPool({
    host     : config.Hotel.database.HOST,
    user     : config.Hotel.database.USERNAME,
    password : config.Hotel.database.PASSWORD,
    database : config.Hotel.database.DATABASE,
    port     : config.Hotel.database.PORT
});

let query = ( sql, values ) => {

    return new Promise(( resolve, reject ) => {
        pool.getConnection( (err, connection) => {
            console.log(err);
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

};

//login start

let login = (name,pwd) => {
    let _sql = `SELECT * FROM hotel_user WHERE username = '${name}' AND password = '${pwd}'`;
    return query( _sql );
};

let token_num = (id) => {
    let _sql = `SELECT * FROM token WHERE hotel_user_id = '${id}'`;
    return query( _sql );
};

let token_fail = (id) => {
    let _sql = `DELETE FROM token where id = '${id}'`;
    return query( _sql );
};

let token_insert = (token,id) => {
    let _sql = `INSERT INTO token (hotel_user_id,token) VALUES ('${id}','${token}')`;
    return query( _sql );
};

//login end

//token validation start

let token_validation = (token) => {
    let _sql = `SELECT * FROM token WHERE token = '${token}'`;
    return query( _sql );
};
//token validation end

//register start
let register = (data) => {
    let _sql = `INSERT INTO hotel_user () VALUES ()`;
    return query( _sql );
};
//register end


module.exports = {
    login,
    token_num,
    token_fail,
    token_insert,
    token_validation,
    register
};