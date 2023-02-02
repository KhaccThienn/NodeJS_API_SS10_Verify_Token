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
    },
    insertToken: (id, token, callback) => {
        let sql = "UPDATE accounts SET ? WHERE id = ? ";
        conn.query(sql, [token, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },
    checkToken: (refreshToken, callback) => {
        let sql = "SELECT * FROM accounts WHERE refresh_token = ?";
        conn.query(sql, refreshToken, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = account;