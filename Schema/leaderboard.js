const mongoose = require('mongoose');

const leaderBoard = mongoose.Schema({
        username: String,
        score: Number
    })

module.exports = {
    leaderBoard
};