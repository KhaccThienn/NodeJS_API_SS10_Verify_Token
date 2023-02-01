const upload = require('../config/upload-file')
const product = require('../models/product');

const productController = {
    index: (req, res) => {
        product.getAll((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },

    create: (req, res) => {

        req.body.anh_sp = req.get('host') + `/${req.file.filename}`;
        product.create(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },

    show: (req, res) => {
        product.getByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.status(200).json(data);
            }
        });
    },
    
    edit: (req, res) => {
        product.getByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.status(200).json(data);
            }
        });
    },



    update: (req, res) => {
        product.getByID(req.params.id, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                if (req.file != null) {
                    req.body.anh_sp = req.get('host') + `/${req.file.filename}`;
                } else {
                    req.body.anh_sp = result[0].anh_sp;
                }

                product.update(req.params.id, req.body, (err, data) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200).json(data);
                    }
                });
            }
        })

    },

    delete: (req, res) => {
        product.delete(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.status(200).json(data);
            }
        });
    }
}

module.exports = productController;