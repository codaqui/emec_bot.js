const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];
const Kickdelay = 6500;

module.exports = {

  info: {
    name: "roleta",
    description: "pode matar", 
    usage: "roleta <@mention>"
  },

  run: async function(client, message, args) {
    var probabilidade = Math.floor(Math.random()*5)
    if (probabilidade == 1){ 
      
      if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(embed
        .setColor(color_embed)
        .setDescription('\`😐\` | Não tenho permissão de expulsar aqui...')
      );

      let member = message.member

      if (!member) return message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`\`❌\` | usuário não encontrado`)
      );

      if (!member.kickable) return message.channel.send(embed
      .setColor(color_embed)
      .setDescription(`\`❌\` | parece que não posso te expulsar 😐`)
      );
    
			var msg1 = message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`5...`)
      );

			var msg2 = setTimeout(function(){message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`4...`))
			}, 1000);

			var msg3 = setTimeout(function(){message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`3...`))
			}, 2000);

			var msg4 = setTimeout(function(){message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`2...`))
			}, 3000);

			var msg5 = setTimeout(function(){message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`1...`))
			}, 4000);

			setTimeout(function(){message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`diga adeus ${member}  :heart:`)
      )}, 5000);

      setTimeout(function(){
				member.kick()
			},Kickdelay);
    }
    
    else{
      message.channel.send(embed
        .setColor(color_embed)
        .setDescription(`não foi dessa vez...`)
      );
    };
  }
};