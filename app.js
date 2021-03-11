const express = require('express');
console.log(process.argv);

const envSelector = require('./envPicker');
envSelector.PickEnv();

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