const Slackbot = require('slackbots');
const axios = require('axios');
const dotenv  = require('dotenv');
//import dotenv from 'dotenv'
dotenv.config()

//const BOT_TOKEN = process.env.BOT_TOKEN
//console.log(process.env.BOT_TOKEN);
const bot = new Slackbot({
    token: `${process.BOT_TOKEN}`,
    name: 'gilApp'
})

