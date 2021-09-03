const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "canal",
    description: "cria um canal de texto",
    usage: "canal <nome do canal>"
  },

  run: async function(client, message, args) {

    //--- verifica as permissões do bot ---//
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embed
      .setDescription('\`❌\` | não tenho as permissões necessárias!')
      .setColor(color_embed)
    );

    //--- verifica as permissões do usuario ---//
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(embed
      .setDescription('\`❌\` | você não tem as permissões necessárias!')
      .setColor(color_embed)
    );

    //-- verifica se o usuario digitou o nome do canal --//
    if (!args[0]) return message.channel.send(embed
      .setDescription(`digite o nome do canal!`)
      .setColor(color_embed)
    );
    
    //------------------------------------------------//

    //--- declara as permissões do cargo "everyone" ---//
    const permsEveryone = {
      id: message.guild.id, 
      allow: ['VIEW_CHANNEL'] 
    };

    //--- declara as permissões de quem deu o comando ---//
    const permsUser = {
      id: message.author.id, 
      allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] 
    };
    
    //------------------------------------------------//
 
    //----- declara as reações da mensagem -----//
    const emotes = ["✅", "❌"]
    const [sim, não] = emotes

    //---- manda a mensagem e reage com os emotes ----//
    const msg = await message.channel.send(embed
      .setDescription('confirme a criacao de seu canal!')
      .setColor(color_embed))
    emotes.forEach(async r => await msg.react(r))

    //----- "coleta" as reações da mensagem -----//
    const collector = msg.createReactionCollector((reaction, user) => emotes.includes(reaction.emoji.name) && user.id == message.author.id, {time: 60 * 1000});

    //----- verifica a reação do usuario -----//
    collector.on('collect', async reaction => {
      if (reaction.emoji.name == sim) {
        await collector.stop()
        channelCreate()
        msg.delete({ timeout: 1000 })
      }
      else if (reaction.emoji.name == não) {
        collector.stop()
        msg.delete({ timeout: 1000 })
      }
    });
 
    //------------------------------------------------//

    //------ tenta criar o canal ------//
    async function channelCreate() {
      let channel 
      try { 
        channel = await message.guild.channels
          .create(`${args}`,
            {
              permissionOverwrites: [permsEveryone, permsUser]
            })
      }
      catch (err) {
        message.channel.send('Erro: ' + err.message)
      };

      //---- avisa o usuario que o canal foi criado ----//
      let aviso = await channel.send(`${message.author}`) 
        .catch(err => message.channel.send('Erro: ' + err.message))
      //------ deleta a mensagem de aviso ------//
      aviso.delete({ timeout: 5000 }) 
    };
  }
};