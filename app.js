const express = require('express');

const envSelector = require('./envPicker');
envSelector.PickEnv();

const db = require('./database');
db.ConnectToDataBase();

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>YoHaRoooooo!</h1>
            </body>
        </html>
    `)
})

app.listen(process.env.PORT, () => {
    
})