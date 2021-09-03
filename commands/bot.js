const Discord = require('discord.js');
const prefix = process.env['PREFIX']
const { MessageEmbed, Client } = require('discord.js');
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']
const token = process.env['TOKEN']
const id_dono = process.env['ID_DONO']

module.exports = {

  info: {
    name: "bot",
    description: "comando só para o dono usar",
    usage: "bot"
  },

  run: async function(client, message, args) {
    
		Monki = await client.users.fetch(id_dono)

    if(message.author.id == id_dono){
			const aviso = await message.channel.send(embed
				.setDescription('oi :heart:')
				.setColor(color_embed)
			);

			const msg = (embed
				.setTitle(`*INFORMAÇÕES DO:*  ${client.user.tag}`)
				.setDescription(`MEU DONO: ${Monki.tag}
				MEU PREFIXO: ${prefix}
				MINHA COR: ${color_embed}
				MEU TOKEN: ||${token}||`)
				.setColor(color_embed)
			);

			await message.author.send(msg)

    }
    else{
      message.channel.send(embed
        .setDescription('você nao é meu dono :rage:')
        .setColor(color_embed)	
      );

			await Monki.send(embed
				.setTitle('Aviso!')
				.setDescription(`parece que tentaram usar o comando "bot" sem permissão, aqui estão as informações do usuario, tome as medidas necessarias... :heart: \n
				id: ${message.author.id}
				nick: ${message.author.tag}
				servidor: ${message.guild.name} `)
				.setColor(color_embed)
				.setTimestamp()
			)
    }
  }
};