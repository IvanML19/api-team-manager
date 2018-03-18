'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlayerSchema = Schema({
	username: String,
	password: String,
	email: String,
	pic: String,
	// Equipo Id
	// teamId: 

	// profile
	name: String,
	surnames: String,
	birhtdate: Date,
	position: { type: String, enum: ['Portero', 'Cierre', 'Ala', 'Pivot'] },
	height: Number,
	weight: Number,
	// dates
	lastLogin: { type: Date, default: null },
	lastRecoverPasswordRequest: { type: Date, default: null },
	lastUpdatePassword: { type: Date, default: null },
	createDate: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Player', PlayerSchema)