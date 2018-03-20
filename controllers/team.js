'use strict'

const Team = require('../models/team');

function testTeam(req, res) {
	res.status(200).send("Team OK")
}

module.exports = {
	testTeam
};