const HomeEndPoint = (app) => {
    app.get("/", (req, res) => {
        res.send(`
            <html>
                <body>
                    <h1>YoHaRoooooo!</h1>
                </body>
            </html>
        `)
    })
}

module.exports = { HomeEndPoint }