const mongoose = require('mongoose');
const lbSchema = require('./Schema/leaderboard');

const ConnectToDataBase = () => {
    mongoose.connect(process.env.CONNECTION_ID, 
    { useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
        console.log("Connected To Database");
    }).catch(err => {
        console.log(err);
    })
}

const InsertToLeaderBoard = (username, score) => {
    return mongoose.model('LeaderBoard', lbSchema.leaderBoard).insertMany({username, score});
}

const GetScoreFromLeaderBoard = (username, callback) => {
    mongoose.model('LeaderBoard', lbSchema.leaderBoard).find({ username }, callback);
}

module.exports = {
    ConnectToDataBase,
    InsertToLeaderBoard,
    GetScoreFromLeaderBoard
};