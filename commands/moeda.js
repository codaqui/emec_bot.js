const Discord = require('discord.js');
const prefix = process.env['PREFIX'];
const { MessageEmbed } = require('discord.js');
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];

module.exports = {

  info: {
    name: "moeda",
    description: "faz uma aposta",
    usage: "moeda <cara/coroa>"
  },

  run: async function(client, message, args) {

    var array1 = ["cara", "coroa"];
    var rand = Math.floor(Math.random() * array1.length);

    if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
      message.reply("insira **cara** ou **coroa** na frente do comando!");
    } 
    else if (args[0].toLowerCase() == array1[rand]) {
      message.channel.send("deu **" + array1[rand] + "**, você ganhou! :)");
    } 
    else if (args[0].toLowerCase() != array1[rand]) {
      message.channel.send("deu **" + array1[rand] + "**, você perdeu! :("
      );
    };
  }
};