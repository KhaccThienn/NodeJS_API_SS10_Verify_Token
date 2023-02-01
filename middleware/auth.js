const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'No token provided' });
    } else {    
        const bearer = req.header('Authorization');
        const token = bearer.split(' ')[1];
        console.log(token);
        try {
            var decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            req.id = decoded.id; 
            next();
        } catch(err) {
            res.status(403).json({ message: err });
        }
    }
};

module.exports = isAuth;