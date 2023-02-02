const jwt = require('jsonwebtoken');

const generateToken = (payload) =>
{
    const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "1m"
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN, {
        expiresIn: "10m"
    });

    return {
        token,
        refreshToken
    }
}

module.exports = generateToken;