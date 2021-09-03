const Discord = require('discord.js');
const prefix = process.env['PREFIX']
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']

module.exports = {

  info: {
    name: "exemplo_comando",
    description: "sem utilidade",
    usage: "ex_comando"
  },

  run: async function(client, message, args) {

    await message.channel.send('oi')
  
  }
};