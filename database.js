const mongoose = require('mongoose');
const lbSchema = require('./Schema/leaderboard');

const ConnectToDataBase = () => {
    mongoose.connect("mongodb+srv://Blank:1815@cluster0.vmpdb.mongodb.net/RainbowCats?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
        console.log("Connected To Database");
    }).catch(err => {
        console.log(err);
    })
}

const InsertToLeaderBoard = (username, score) => {
    return mongoose.model('LeaderBoard', lbSchema.leaderBoard).insertMany({username, score});
}

module.exports = {
    ConnectToDataBase,
    InsertToLeaderBoard
};