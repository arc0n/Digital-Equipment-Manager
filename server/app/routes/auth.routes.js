const refreshTokens = {};
const User = require('../models/user.model.js');
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");

module.exports = app => {

const randtoken = require('rand-token');

app.post('/login', async (req, res) => {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.getByEmail(req.body.email.toLowerCase());
         if(!user) return res.status(403).send("Email oder Passwort falsch");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(403).send("Email oder Passwort falsch");
        const token = await user.generateAuthToken();
        const refreshToken = randtoken.uid(256);
        refreshTokens[refreshToken] = user.email;
        res.status(201).send({jwt: token, refreshToken: refreshToken,email: user.email});
    });

    app.post('/logout', async (req, res) => {
        const refreshToken = req.body.refreshToken;
        if (refreshToken in refreshTokens) {
            delete refreshTokens[refreshToken];
        }
        res.sendStatus(204);
    });

    app.post('/refresh', async (req, res) => {
        const refreshToken = req.body.refreshToken;

        if (refreshToken in refreshTokens) {
            const user = await User.getByEmail(req.body.email.toLowerCase())
            if(!user) res.status(400).send("Invalid Email/Username")
            const token = await user.generateAuthToken();
            res.json({jwt: token, email: user.email})    }

        else {
            res.sendStatus(401);
        }
    });


    function validate(req) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().min(5).max(1024).required()
        };

        return Joi.validate(req, schema);
    }

};
