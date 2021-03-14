const LeaderBoardEndPoint = (app, db) => {
    GetDataFromLeaderBoard(app, db);
    PostToLeaderBoard(app, db);
}

const GetDataFromLeaderBoard = (app, db) => {
    app.get("/LeaderBoard", (req, res) => {
        let username = req.query.username;
        db.GetScoreFromLeaderBoard(username, (err, data) => {
            let jsonObj = {
                username: data[0].username,
                score: data[0].score
            }

            res.send(JSON.stringify(jsonObj));
        })
    })
}

const PostToLeaderBoard = (app, db) => {
    app.post("/LeaderBoard", (req, res) => {
        let buffer = [];
        
        req.on("data", (data) => {
            buffer.push(data);
        }).on("end", () => {
            const JSONData = JSON.parse(decodeURIComponent(Buffer.concat(buffer).toString()));
            console.log(JSONData);
            db.InsertToLeaderBoard(JSONData.username, JSONData.score).then(() => {
                res.send(`
                    <html>
                        <body>
                            <h1>Data Recieved</h1>
                        </body>
                    </html>
                `)
            })
        })
    })
}

module.exports = {
    LeaderBoardEndPoint
}
