const Slackbot = require('slackbots');
const axios = require('axios');
const dotenv  = require('dotenv');
//import dotenv from 'dotenv'
dotenv.config()

//const BOT_TOKEN = process.env.BOT_TOKEN
console.log(process.env.BOT_TOKEN);
const bot = new Slackbot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'kobby'
});

// start the bot.
//if you want to build another SlackBot in the future, check your
//email. Aubrey from Slack was really helpful.
bot.on('start', () => {

    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @mybot',
        params
    )

    //post a message to a private group or a user

    bot.postMessageToUser('gea33', 'Hey what is up gea33',params)
    //bot.postMessageToGroup('private_group','Hello there!')

    
    
});

// handle errors

bot.on('error', (err) => {

    console.log(err);
});

//handle messages from the user

bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text)
})
//response handler
function handleMessage(message) {

    if(message.includes('inspire me')) {
        inspireMe()
    } else if (message.includes('random joke')){
        randomJoke()
    }else if (message.includes('help')){
        runHelp()
    }
}

function inspireMe() {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
        .then(res => {
            const quotes = res.data;
            const random = Math.floor(Math.random() * quotes.length);
            const quote = quotes[random].quote
            const author = quotes[random].author

            const params = {
                icon_emoji: ':male-technologist:'
            }

            bot.postMessageToChannel(
                'personal',
                `:zap: ${quote} - *${author}*`,
                params
            );
        })

}

// random joke

function randomJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            const joke = res.data.value;

            const params = {
                icon_emoji: ':smile:'
            }

            bot.postMessageToChannel(
                'random',
                `:zap: ${joke}`,
                params
            )
        })

    }



//show help

function runHelp() {

    const params = {
        icon_emoji: ':question:'
    }

    bot.postMessageToChannel(
        'random',
        `Type *@mybot* with *inspire me* to get an inspiring techie quote, *random joke* to get a Chuck Norris random joke and *help* to get this instruction again`,
        params
    );
}









