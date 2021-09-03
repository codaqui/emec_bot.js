const Discord = require('discord.js')
const prefix = process.env['PREFIX']
const { MessageEmbed } = require('discord.js')
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']

module.exports = {

  info: {
    name: "clear",
    description: "limpa mensagens",
    usage: "clear <numero de mensagens>"
  },

  run: async function(client, message, args) {

    //---- verifica as permissões do bot ----//
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed
      .setDescription('não tenho permissão de apagar mensagens aqui')
      .setColor(color_embed)
    );

    //--- verifica as permissões do usuario ---//
    if (!message.member.permissions.has("MANAGE_MESSAGES"))return message.channel.send(embed
      .setDescription('você não tem permissão de apagar mensagens')
      .setColor(color_embed)
    );

    const deleteCount = parseInt(args[0], 10);
    
    if (!deleteCount || deleteCount < 1 || deleteCount > 99)return message.channel.send(embed
      .setDescription("forneça um número de **1 a 99** mensagens a serem excluídas")
      .setColor(color_embed)
    );

    const fetched = await message.channel.messages.fetch({
      limit: deleteCount + 1
    });

    message.channel.bulkDelete(fetched);

    if (args == 1){
      const msg = message.channel.send(embed
        .setDescription(`**uma mensagem limpa nesse chat!**`)
        .setColor(color_embed))
      .then(msg => msg.delete({ timeout: 5000 }))
      .catch()
    }
    else{
      const msg = message.channel.send(embed
        .setDescription(`**${args[0]} mensagens limpas nesse chat!**`)
        .setColor(color_embed)
      )
      .then(msg => msg.delete({ timeout: 5000 }))
      .catch()
    };
  }
};