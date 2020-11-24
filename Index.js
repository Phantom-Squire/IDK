Discord = require('discord.js');
DB = require('quick.db');
Bot = new Discord.Client();
Prefix = ("Enter Prefix Here"); // Use Your Own Prefix Idea //
Token = ("Enter Token Here"); // Use Your Own Bot Token //
Status = ("Online")

Bot.once('ready', () => {
  console.info(`Bot: ${Bot.user.tag}`);
  console.info(`Bot Status: ${Status}!`);
});

Bot.login(Token)
