const Slackbot = require('slackbots');
const axios = require('axios');
const dotenv  = require('dotenv');

dotenv.config()

const bot = new Slackbot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'gisilberhartApp'
})