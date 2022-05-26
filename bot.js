const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login("OTc5MzA4NDYzNDYzMjE1MTM0.GDTsyb.bgbdY9faZyc-eK0TL7iGSGofWOiTvF_CprQk-0");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
})