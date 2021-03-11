const mongoose = require('mongoose');

const bigCat = mongoose.Schema({
        name: String,
        type: String,
        gender: String,
        age: Number
    })

module.exports = {
    bigCat
};