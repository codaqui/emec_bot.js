const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

info: {
  name: "subtrair",
  description: "subtrai dois ou mais numeros",
  usage: "subtrair <x y z...>"
},

run: async function(client, message, args) {
const numArgs = args.map(x => parseFloat(x));
const sum = numArgs.reduce((counter, x) => counter -= x);
message.channel.send(embed
  .setDescription(`a diferença dos numeros concedidos é: ${sum}`)
  .setColor(color_embed)
);
}};