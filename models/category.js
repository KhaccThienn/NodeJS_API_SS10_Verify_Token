const conn = require('../config/database');

const category = {
    getAll: (callback) => {
        const sql = "SELECT * FROM danh_muc";
        conn.query(sql, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    getByID: (id, callback) => {
        const sql = "SELECT * FROM danh_muc WHERE id = ?";
        conn.query(sql, id, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    create: (newCate, callback) => {
        const sql = "INSERT INTO danh_muc SET ?";
        conn.query(sql, newCate, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    update: (id, cate, callback) => {
        const sql = "UPDATE danh_muc SET ten_danh_muc = ? WHERE id = ?";
        conn.query(sql, [cate.ten_danh_muc, id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM danh_muc WHERE id = ?";
        conn.query(sql, [id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    }
}

module.exports = category;