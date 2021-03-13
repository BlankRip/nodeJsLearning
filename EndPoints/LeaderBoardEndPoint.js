const LeaderBoardEndPoint = (app, db) => {
    app.post("/LeaderBoard", (req, res) => {
        let buffer = [];
        
        req.on("data", (data) => {
            buffer.push(data);
        }).on("end", () => {
            const JSONData = JSON.parse(Buffer.concat(buffer).toString());
            db.InsertToLeaderBoard(JSONData.Username, JSONData.Score).then(() => {
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
