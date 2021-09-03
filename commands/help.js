const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {
  info: {
    name: "help",
    description: "amostra os comando",
    usage: "[comando]"
  },

  run: async function(client, message, args) {
    var allcmds = "";

    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info
      allcmds += `${prefix}${cmdinfo.name}\n`
    })

    let embed = new MessageEmbed()
      .setTitle(`*COMANDOS:*`)
      .setColor(color_embed)
      .setDescription(`**${allcmds}**`)
      .setFooter(`• solicitado por: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
      .setTimestamp()
    ;
    if (!args[0]) return message.channel.send(embed)
    else {
      let cmd = args[0]
      let command = client.commands.get(cmd)
      if (!command) return message.channel.send(`o comando ** ${command} ** não existe! digite: ${prefix}help para saber quais comandos estão disponíveis.`)
      let commandinfo = new MessageEmbed()
        .setTitle("Informações do comando:  "+command.info.name)
        .setColor(color_embed)
        .setDescription(`
        Nome: ${command.info.name}
        Descrição: ${command.info.description}
        Uso: \`\`${prefix}${command.info.usage}\`\`
        `)
      message.channel.send(commandinfo)
    };
  }
};