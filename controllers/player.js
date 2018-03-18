'use strict'

const Player = require('../models/player')

function testPlayer(req, res) {
	res.status(200).send("Player OK")
}



module.exports = {
	testPlayer
}