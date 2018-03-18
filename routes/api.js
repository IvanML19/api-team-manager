'use strict'

const express = require('express')

const playerCtrl = require('../controllers/player')
const teamCtrl = require('../controllers/team')

const api = express.Router()

/*
api.get('/product', productCtrl.getProducts )
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct) 
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct) 
*/

/***************************************/
/************** PLAYER *****************/
/***************************************/

api.get('/player', playerCtrl.testPlayer )


/***************************************/
/*************** TEAM ******************/
/***************************************/

api.get('/team', teamCtrl.testTeam)



module.exports = api
