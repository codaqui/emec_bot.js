const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "uptime",
    description: "exibe o tempo que o bot está online",
    usage: "uptime"
  },

  run: async function(client, message, args) {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

    const embed = new Discord.MessageEmbed()
      .setTitle(`Tempo de atividade 🕰️`)
      .setThumbnail("https://imgur.com/WZMylbw.gif")
      .setColor(color_embed)
      .setDescription(`**Estou online há:**\n${uptime}`)

    message.channel.send(embed);
  }
};