//----- chamando bibliotecas -----//
const Discord = require("discord.js");
const { Client,Collection,MessageEmbed } = require('discord.js')
const client = new Client;
const id_do_dono = process.env['ID_DONO'];
const fs = require("fs");
const embed = new Discord.MessageEmbed();
const color_embed = process.env['COLOR_EMBED'];
client.commands = new Collection();
const prefix = process.env['PREFIX']



//----- carrega os comandos -----//
fs.readdir("./commands/", (err, files) => {
if (err) return console.error(err);
files.forEach((file) => {
  if (!file.endsWith(".js")) return;
  let props = require(`./commands/${file}`);
  let commandName = file.split(".")[0];
  client.commands.set(commandName, props);
  console.log("* comando carregado: "+ commandName)})
  console.log(`${client.commands.size} comandos carregados`)
  console.log('-'.repeat(55))
 }
);



//----- evento ready (bot online) -----//
client.on("ready", async () => {

  //----- id do dono 😎 -----//
  Monki = await client.users.fetch(id_do_dono)

  //---- mostra quando o bot está online ----//
  console.log(`online como ${client.user.tag} em ${client.guilds.cache.size} servidores`)
  console.log(`by: ${Monki.tag}`)

  //----- status do bot -----//
  const activity = [
    { name: `online em ${client.guilds.cache.size} servidores! `, type: 0 },
    {
      name: `digite ${prefix}help para saber quais comandos estão disponíveis.
    `, type: 0
    },
    { name: `by: ${Monki.tag}`, type: 0, }]

  //----- intervalo entre os status -----//
  setInterval(function() {
    let random = Math.floor(Math.random() * activity.length)
    client.user.setPresence({ activity: activity[random] })
  }, 1000 * 10)
});



//----- evento mensagem -----//
client.on('message', message => {

  //---- verifica algumas coisas na mensagem ----//
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  const args = message.content
    .trim().slice(prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  //----- chama a pasta "commands" -----//
  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);

  //----- mensagens de erro -----//
  } catch (err) {
    
    //--- caso o usuario tenha digitado apenas o prefixo ---//
    if (!command[0]){
      message.channel.send(embed
        .setDescription(`opa, parece que você me chamou mas não sabe o que quer fazer, tente usar o comando ${prefix}help para saber quais comandos estão disponiveis`)
        .setColor(color_embed)
      );
    }

    //--- caso o usuario tenha digitado o comando errado ---//
    else {
      message.channel.send(embed
        .setDescription(`o comando ** ${command} ** não existe! digite "${prefix}help" para saber quais comandos estão disponíveis.`)
        .setColor(color_embed)
      );
    };
  }
});



//----- loga o bot -----//
client.login(process.env.TOKEN); 