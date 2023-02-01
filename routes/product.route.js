const productController = require('../controllers/productController');
const upload = require('../config/upload-file')
const product_route = (app) => {
    app.get('/api/product', productController.index);
    app.get('/api/product/:id', productController.show);
    app.post('/api/product', upload.single('anh_sp'), productController.create);

    app.get('/api/product/:id/edit', productController.edit);
    app.put('/api/product/:id', upload.single('anh_sp'), productController.update);

    app.delete('/api/product/:id', productController.delete);
};

module.exports = product_route;