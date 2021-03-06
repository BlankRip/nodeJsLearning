// console.log("Hello World");

// const fs = require("fs");
// let playerData = {
//     hp: 83,
//     sheild: 150,
//     dmg: 75,
//     atckSd: 8,
//     usableWeapons: ["sword", "dagger", "pike"],
//     Attack: () => { console.log("Swung the weapon"); }
// }

// fs.writeFile("./Player1Data.json", JSON.stringify(playerData), 'utf8', () => {
//     fs.open("./Player1Data.json", "r", (err, path) => {
//         fs.readFile(path, 'utf8', (err, data) => {
//             console.log(JSON.parse(data));
//         })
//     });
// });

const http = require("http");

const server = http.createServer((req, resp) => {
    resp.setHeader("content-type", "image/svg+xml");

    if(req.url == "/") {
        resp.write(
            `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="blue"/>
            </svg>`);
    }
    if(req.url == "/NotHome") {
        resp.write(
            `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="120" width="100" height="100" rx="15" fill="red"/>
            </svg>`);
    }
    if(req.url == "/App") {
        resp.write(
            `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" stroke="black" fill="yellow"/>
            </svg>`);
    }
});

server.listen(6969);