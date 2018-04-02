'use strict';

const Player = require('../models/player');
const service = require('../services');

// Get all players
function getPlayers (req, res) {
    Player.find({}, (err, players) => {
        if (err) res.status(500).send({ message: `Error connecting to the server: ${err}` });
        if (!players) res.status(500).send({ message: `Error getting players: ${err}` });

        res.status(200).send({ players });
    });
}

// registro
function signUpPlayer (req, res) {
    Player.find({ email: req.body.email }, (err, playersEmail) => {
        if (err) res.status(500).send({ message: `Error connecting to the server: ${err}` });
        if (!playersEmail) res.status(500).send({ message: `Error getting players: ${err}` });
        if(playersEmail.length < 1){
            // si no encontramos ningun player con ese email, buscamos alguno con ese username
            Player.find({ username: req.body.username }, (err, playersUsername) => {
                if (err) res.status(500).send({ message: `Error connecting to the server: ${err}` });
                if (!playersUsername) res.status(500).send({ message: `Error getting players: ${err}` });
                if(playersUsername.length < 1) {
                    const player = new Player({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    });
                    player.save((err) => {
                        if (err) return res.status(500).send({ message: `Error saving user: ${err}` });
                        return res.status(201).send({ token: service.createToken(player)})
                    });
                }else{
                    res.status(200).send({ message: `Username in use` });
                }
            });
        }else{
            res.status(200).send({ message: `Email in use` });
        }
    });






}

// login
function signInPlayer (req, res) {
    Player.find( { email: req.body.email }, (err, player) => {
        if (err) res.status(500).send({ message: err });

        if (!player) res.status(404).send({ message: `User doesn't exist` });

        req.user = player;
        res.status(200).send({
            message: 'Login ok',
            token: service.createToken(player)
        });
    }
)}


module.exports = {
    getPlayers,
    signUpPlayer,
    signInPlayer
};



/*
// test
function testPlayer(req, res) {
    res.status(200).send("Player OK")
}
*/