'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = Schema({
	username: { type: String, unique: true },
	password: { type:String, select: false }, // select=false para no devovlerlo al cargar un player
	email: { type: String, unique: true },
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
    createDate: { type: Date, default: Date.now() },
	lastLogin: { type: Date, default: null },
	lastRecoverPasswordRequest: { type: Date, default: null },
	lastUpdatePassword: { type: Date, default: null },
})

// lanzaremos esto antes de realizar un grabado (registro) de un player
PlayerSchema.pre('save', (next) => {
	let user = this;

	if(!user.isModified('password')) return next();

	bcrypt.genSalt(10, (err, salt) => {
		if(err) return next();

		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err) return next(err);

			user.password = hash;
			next()
		})
	})
})

module.exports = mongoose.model('Player', PlayerSchema);