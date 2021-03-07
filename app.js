const express = require('express');
const port = 6969;

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

app.listen(port, () => {
    
})