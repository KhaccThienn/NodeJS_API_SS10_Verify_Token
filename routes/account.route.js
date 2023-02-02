const accountController = require('../controllers/accountController');

const account_route = (app) => {
    app.get('/api/account', accountController.getAll);

    app.post('/api/register', accountController.register);
    app.post('/api/login', accountController.login);

    app.post('/api/token/', accountController.refreshToken);
};

module.exports = account_route;