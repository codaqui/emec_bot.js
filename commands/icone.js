const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "icone",
    description: "mostra o icone de um usuario",
    usage: "icone <@mention>"
  },

  run: async function(client, message, args) {

    if (!args[0]) {
      message.channel.send(embed
        .setDescription(`${message.author} você não marcou um usuario!`)
        .setColor(color_embed))
    } 
    else {

      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      
      let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

      let msg = new Discord.MessageEmbed() 
        .setColor(color_embed) 
        .setTitle(`icone de ${user.username}`) 
        .setImage(avatar) 
        .setFooter(`• solicitado por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
      await message.channel.send(msg);
    };
  }
};