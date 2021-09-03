const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "say",
    description: "repete e apaga sua mensagem",
    usage: "say <texto a ser repetido>"
  },

  run: async function(client, message, args) {
    if (args.length > 0)          
      message.channel.send(args.join(' '))
    else
      message.channel.send(embed
        .setDescription(' você não digitou uma mensagem a ser repetida! ')
        .setColor(color_embed))
    if (args.length > 0) 
      message.delete();
  }
};