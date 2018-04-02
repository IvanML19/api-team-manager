'use strict';

const express = require('express');

const playerCtrl = require('../controllers/player');
const teamCtrl = require('../controllers/team');

const auth = require('../middlewares/auth');

const api = express.Router();

/************** PLAYER *****************/
api.get('/getPlayers', playerCtrl.getPlayers);
api.post('/signup', playerCtrl.signUpPlayer);
api.post('/signin', playerCtrl.signInPlayer);


/*************** TEAM ******************/
api.get('/team', teamCtrl.testTeam);

/* TEST */
api.get('/private',  auth.isAuth, (req, res) =>  {
    res.status(200).send({ message: `Access Granted` });
});



module.exports = api;


/*
api.get('/product', productCtrl.getProducts )
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
*/