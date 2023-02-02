const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const account = require('../models/account');
const generateToken = require('../helpers/generateToken');
const saltRounds = 10;


const accountController = {
    getAll: (req, res) => {
        account.getAll((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    register: (req, res) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                req.body.password = hash;
                account.register(req.body, (err, data) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200).json(data);
                    }
                });
            });
        });
    },
    login: (req, res) => {
        account.checkLogin(req.body.email, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err, result) => {
                        if (err) {
                            res.json(err);
                        } else {
                            if (result) {
                                // const token = jwt.sign({ id: data[0].id }, process.env.SECRET_TOKEN, {expiresIn: "1m"});
                                const token = generateToken({id: data[0].id});
                                account.insertToken( data[0].id , {refresh_token: token.refreshToken}, (err, tokenData) =>{
                                    if (err) {
                                        res.json(err);
                                    } else {    
                                        res.status(200).json({tokenData, token});
                                    }
                                })
                            } else {
                                res.json({ result, message: "Failed" });
                            }
                        }
                    })
                }
            }
        })
    },
    refreshToken:(req, res) =>{
        const refreshToken = req.body.refreshToken;
        if (!refreshToken){
            return res.status(401).json({message: "Refresh token is required"});
        } else {
            account.checkToken(refreshToken, (err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    try {
                        var decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
                        console.log(decoded);
                        const token = generateToken({id: decoded.id});
                        account.insertToken( decoded.id , {refresh_token: token.refreshToken}, (err, tokenData) =>{
                            if (err) {
                                res.json(err);
                            } else {    
                                res.status(200).json({tokenData, token});
                            }
                        })
                    } catch(err) {
                        res.status(403).json({ message: err });
                    }
                }
            });
        }
    }
};

module.exports = accountController;
