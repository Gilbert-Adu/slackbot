const Slackbot = require('slackbots');
const axios = require('axios');
const dotenv  = require('dotenv');
//import dotenv from 'dotenv'
dotenv.config()

//const BOT_TOKEN = process.env.BOT_TOKEN
console.log(process.env.BOT_TOKEN);
const bot = new Slackbot({
    token: 'xoxb-1041672669169-1037239510642-tuJReYNEfrUJtlIZJxkvBE7a',
    name: 'gilApp'
})

