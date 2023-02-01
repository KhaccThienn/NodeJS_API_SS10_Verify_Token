const conn = require('../config/database');

const account = {
    getAll: (callback) => {
        let sql = "SELECT * FROM accounts";
        conn.query(sql, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
                console.log(result);
            }
        });
    },

    register: (data, callback) => {
        let sql = "INSERT INTO accounts SET ?";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    checkLogin: (data, callback) => {
        let sql = "SELECT * FROM accounts WHERE email = ? ";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = account;