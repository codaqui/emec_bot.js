const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {
  info: {
    name: "invite",
    description: "gera um link de convite do bot",
    usage: "invite"
  },

  run: async function (client, message, args) {
    
    var permissions = 8;
    
    let invite = new MessageEmbed()
    .setTitle(`convide ${client.user.username} para seu servidor agora mesmo!`)
    .setDescription(`[link de convite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setColor(color_embed)
    return message.channel.send(invite);
  }
};