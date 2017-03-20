var SlackBots = require('slackbots')



var bot = new SlackBots({
    token: process.env.SLACKTOKEN ,
    name: 'General Stavoros'
});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
});