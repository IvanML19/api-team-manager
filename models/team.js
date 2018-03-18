'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = Schema({
	email: String,
	password: String,
	name: String,
	pic: String,
	//fieldLocation: 

	
	foundationDate: { type: Date, default: null },

	// dates
	lastLogin: { type: Date, default: null },
	lastRecoverPasswordRequest: { type: Date, default: null },
	lastUpdatePassword: { type: Date, default: null },
	createDate: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Team', TeamSchema)