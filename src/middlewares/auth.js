const jwt = require("jsonwebtoken");
require('dotenv').config;
const secretToken = process.env.secretToken;

module.exports = {

    async auth(req, res, next) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ error: 'Token inexistente' });

        }
        const [, token] = authHeader.split(' ');


        try {
            const decoded = jwt.verify(token, secretToken);

            console.log(decoded)
        } catch (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        return next();
    },


    async loginIn(req, res, next) {
        const authHeader = req.headers.authorization;

        try {
            const [, token] = authHeader.split(' ');
            const decoded = jwt.verify(token, secretToken);

          return res.status(200).json({loginIn: true});
        } catch (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
    }



}  
