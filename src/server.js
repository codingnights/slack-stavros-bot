var SlackBots = require('slackbots')

var request = require('request')

var botSlack = new SlackBots({
    token: process.env.SLACKTOKEN ,
    name: 'General Stavoros'
});

