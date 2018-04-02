'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const PlayerSchema = Schema({
	username: { type: String, unique: true },
	password: { type:String, select: false }, // select=false para no devovlerlo al cargar un player
	email: { type: String, unique: true },
	pic: String,
	// Equipo Id
	// teamId: 

	// profile
	name: {type: String, default: null },
	surnames: {type: String, default: null },
	birhtdate: { type: Date, default: null },
	position: { type: String, enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Striker'] },
    height: { type: Number, default: null },
    weight: { type: Number, default: null },

	// dates
    createDate: { type: Date, default: Date.now() },
	lastLogin: { type: Date, default: null },
	lastRecoverPasswordRequest: { type: Date, default: null },
	lastUpdatePassword: { type: Date, default: null },
});

// lanzaremos esto antes de realizar un grabado (registro) de un player
PlayerSchema.pre('save', function (next) {
	let player = this;

	if(!player.isModified('password')) return next();

	bcrypt.genSalt(10, (err, salt) => {
		if(err) return next();

		bcrypt.hash(player.password, salt, null, (err, hash) => {
			if(err) return next(err);

            player.password = hash;
			next()
		})
	})
});

module.exports = mongoose.model('Player', PlayerSchema);