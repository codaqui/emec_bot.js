const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "vote",
    description: "cria uma votação",
    usage: "vote <conteúdo da votação>"
  },

  run: async function(client, message, args) {
    message.delete();
    const content = args.join(" ");

    if (!args[0]) {
      return message.channel.send(`${message.author.username}, escreva o aviso após o comando!`)
    } else if (content.length > 1000) {
      return message.channel.send(`${message.author.username}, faça uma votação de no máximo 1000 caracteres!`);
    } else {
      const msg = await message.channel.send(
        new Discord.MessageEmbed()
        .setTitle('Votação!')
        .setColor(color_embed)
        .addField("Autor:", message.author)
        .addField("Conteúdo:", content)
        .setTimestamp()

      );

      const emojis = ["✅", "❌"];

      for (const i in emojis) {
        await msg.react(emojis[i])
      };
    };
  }
};