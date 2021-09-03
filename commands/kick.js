const Discord = require('discord.js');
const prefix = process.env['PREFIX']
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']

module.exports = {

  info: {
    name: "kick",
    description: "expulsa o usuario mencionado",
    usage: "kick <@mention>"
  },

  run: async function(client, message, args) {

   if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(embed
      .setDescription('não tenho permissão de expulsar aqui!')
      .setColor(color_embed)
    );

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(embed
      .setDescription('você não tem permissão de expulsar!')
      .setColor(color_embed)
    );

    if (!args[0]) return message.channel.send(embed
      .setDescription(`marque o usuario a ser expulso!
      ex: \`${prefix}kick @mention\``)
      .setColor(color_embed)
    );

    let mention = message.mentions.members.first()
    let member = mention ? mention : message.guild.members.cache.get(args[0])

    if (!member) return message.channel.send(embed
      .setColor(color_embed)
      .setDescription(`usuário não encontrado!`)
    );

    if (!member.kickable) return message.channel.send(embed
      .setColor(color_embed)
      .setDescription(`não posso expulsar esse membro!`)
    );

		//----- declara as reações da mensagem -----//
    const emotes = ["✅", "❌"]
    const [sim, não] = emotes

    //---- manda a mensagem e reage com os emotes ----//
    const msg = await message.channel.send(embed
      .setDescription('confirme o kick!')
      .setColor(color_embed))
    emotes.forEach(async r => await msg.react(r))

    //----- "coleta" as reações da mensagem -----//
    const collector = msg.createReactionCollector((reaction, user) => emotes.includes(reaction.emoji.name) && user.id == message.author.id, {time: 60 * 1000});

    //----- verifica a reação do usuario -----//
    collector.on('collect', async reaction => {
      if (reaction.emoji.name == sim) {
        await collector.stop()
        member.kick({ timeout: 1000 })
				message.channel.send(embed
					.setDescription(`tchau ${member} :heart:`)
					.setColor(color_embed)
				);
      }
      else if (reaction.emoji.name == não) {
        collector.stop()
				msg.edit(embed
					.setDescription('entendido!')
					.setColor(color_embed)
				)
				msg.delete({ timeout: 1000 })
      };
    });
  }
};