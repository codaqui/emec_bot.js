const Discord = require('discord.js');
const prefix = process.env['PREFIX']
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed()
const color_embed = process.env['COLOR_EMBED']

module.exports = {

  info: {
    name: "horario",
    description: "caso você não tenha um relogio pode usar esse comando",
    usage: "horario"
  },

  run: async function(client, message, args) {

    let d = new Date()
    let h1 = d.getHours()
    let h2 = `:${d.getMinutes()}:${d.getSeconds()}`;

		if (h1 == 00) {
			let h1 = 21

			let horario = h1 + h2
			
			await message.channel.send(embed
				.setDescription(horario)
				.setColor(color_embed)
			);
		}

		else if (h1 == 01) {
			let h1 = 22

			let horario = h1 + h2
			
			await message.channel.send(embed
				.setDescription(horario)
				.setColor(color_embed)
			);
		}

		else if (h1 == 02) {
			let h1 = 23

			let horario = h1 + h2
			
			await message.channel.send(embed
				.setDescription(horario)
				.setColor(color_embed)
			);
		}

		else {

			let h3 = h1 - 3

			let horario = h3 + h2
			
			await message.channel.send(embed
				.setDescription(horario)
				.setColor(color_embed)
			);
		};
  }
};