var express = require('express');
var router = express.Router();

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
var channelsId;
var author;


router.get('/helper/kill', function(req, res) {
    if ( channelsId != null ) {
        client.channels.cache.get(channelsId).send(`${author}, 正遭受敵人攻擊！ 已瞬移至其他位置。`);
    }
    res.json({ message: "OK" });
});

router.get('/helper/potion', function(req, res) {
    if ( channelsId != null ) {
        client.channels.cache.get(channelsId).send(`${author}, 身上藥水不足！ 已自動返回安全村莊。`);
    }
    res.json({ message: "OK" });
});

router.get('/helper/hp', function(req, res) {
    if ( channelsId != null ) {
        client.channels.cache.get(channelsId).send(`${author}, 生命已經見底！ 已自動返回安全村莊。`);
    }
    res.json({ message: "OK" });
});

router.get('/helper/bag', function(req, res) {
    if ( channelsId != null ) {
        client.channels.cache.get(channelsId).send(`${author}, 需要整理一下背包！ 已自動返回安全村莊。`);
    }
    res.json({ message: "OK" });
});

module.exports = router;

client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!a' && msg.author.id === config.user_id) {
        channelsId = msg.channel.id;
        msg.reply('小助手頻道已設置完成!');
        author = msg.author;
    }
})