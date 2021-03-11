const mongoose = require('mongoose');
const bcSchema = require('./bigCat');

const ConnectToDataBase = () => {
    mongoose.connect("mongodb+srv://Blank:1815@cluster0.vmpdb.mongodb.net/RainbowCats?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
        console.log("EH");
        const cat = mongoose.model('BigCats', bcSchema);
        
        cat.insertMany({name: "Trager", type: "Lion", age: 7, gender: "Male"}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        
        cat.insertMany({name: "Marry", type: "White Tiger", age: 8, gender: "Female"}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        
        cat.find({gender: "Male"}, (err, data) => {
            console.log(err);
            console.log(data);
        })
        
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    ConnectToDataBase
};