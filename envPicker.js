const PickEnv = () => {
    if(process.argv[2] == "--dev")
        require('dotenv').config({path: "./.env"});
    else if(process.argv[2] == "--prod") {
        require('dotenv').config({path: "./.env_prod"});
    }
}

module.exports = {PickEnv};