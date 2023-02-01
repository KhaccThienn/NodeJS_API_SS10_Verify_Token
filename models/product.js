const conn = require('../config/database');

const category = {
    getAll: (callback) => {
        const sql = "SELECT sp.*, dm.ten_danh_muc FROM san_pham sp JOIN danh_muc dm ON sp.ma_danh_muc = dm.id";
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
        const sql = "SELECT * FROM san_pham WHERE id = ?";
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

    create: (newProd, callback) => {
        const sql = "INSERT INTO san_pham SET ?";
        conn.query(sql, newProd, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    update: (id, Product, callback) => {
        const sql = "UPDATE san_pham SET ten_sp = ?, anh_sp = ?, gia_sp = ?, gia_km = ?, ma_danh_muc = ? WHERE id = ?";

        conn.query(sql, [Product.ten_sp, Product.anh_sp, Product.gia_sp, Product.gia_km, Product.ma_danh_muc, id], (err, data) => {
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
        const sql = "DELETE FROM san_pham WHERE id = ?";
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