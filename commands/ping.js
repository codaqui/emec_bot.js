const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "ping",
    description: "testa o atraso do servidor/api",
    usage: "ping"
  },

  run: async function(client, message, args) {
    const m = await message.channel.send('testando ping...');

    const msg = await message.channel.send(
      new Discord.MessageEmbed()
      .setTitle(`🏓 ** Pong!**`)
      .setColor(color_embed)
      .addField(`Latência do Servidor:`, `**${m.createdTimestamp -
      message.createdTimestamp}ms.**`)
      .addField(`Latência da API:`,`**${Math.round(
        client.ws.ping
      )}ms**`)
      .setTimestamp()
    );

    m.delete();
  }
};

