const Discord = require('discord.js')
const prefix = process.env['PREFIX']
const { MessageEmbed } = require('discord.js')
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']

module.exports = {

  info: {
    name: "dividir",
    description: "divide dois ou mais numeros",
    usage: "dividir <x y z...> "
  },

  run: async function(client, message, args) {

    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter /= x);


    await message.channel.send(embed
      .setDescription(`a razão dos numeros concedidos é: ${sum}`)
      .setColor(color_embed)
    );
  }
};