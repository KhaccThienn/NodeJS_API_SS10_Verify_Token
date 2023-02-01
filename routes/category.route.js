const categoryController = require('../controllers/categoryController');
const isAuth = require('../middleware/auth');

const category_route = (app) => {
    app.get('/api/category', isAuth,categoryController.index);
    app.get('/api/category/:id', categoryController.show);
    app.post('/api/category', categoryController.create);

    app.get('/api/category/:id/edit', categoryController.edit);
    app.put('/api/category/:id', categoryController.update);

    app.delete('/api/category/:id', categoryController.delete);
};

module.exports = category_route;