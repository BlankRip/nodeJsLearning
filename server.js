const express = require('express');
const db = require('./database');
const leaderboardEndPoint = require('./EndPoints/LeaderBoardEndPoint');
const HomeEndPoint = require('./EndPoints/HomeEndPoint');


const runServer = () => {
    const app = express();
    db.ConnectToDataBase();
    
    leaderboardEndPoint.LeaderBoardEndPoint(app, db);
    HomeEndPoint.HomeEndPoint(app);
    
    app.listen(process.env.PORT, () => { });
}

module.exports = {
    runServer
}