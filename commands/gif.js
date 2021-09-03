const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "gif",
    description: "envia um gif aleatorio",
    usage: "gif"
  },

  run: async function(client, message, args) {

    var list = [
      'https://tenor.com/view/monki-monkey-monkeys-drip-swag-gif-20694900',
      'https://tenor.com/view/monkiflip-monki-flip-gif-18149595',
      'https://tenor.com/view/aaaa-monkey-spinning-spin-playing-gif-17407714',
      'https://tenor.com/view/monki-monkey-monki-flip-monki-flip-on-ice-monkey-flip-gif-20254327',
      'https://tenor.com/view/monkey-monkey-meme-monke-meme-funny-monkey-getting-ready-gif-20754053',
      'https://tenor.com/view/monki-gif-18972556',
      'https://tenor.com/view/david-monke-david-gaming-gaming-monke-gaming-gif-19468007',
      'https://tenor.com/view/yes-moment-moment-monke-moment-monkey-monki-gif-18818008',
      'https://tenor.com/view/fiypriv-fiybvb-afcganzi-ganzi-rantlol-gif-19839806'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    await message.channel.send(rand);
  }
};

