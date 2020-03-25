const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("687577765024890937")
setInterval(function() {
channel.send(`كس امك يابن القحبة يا سيف`);
}, 30)
})

client.login(process.env.BOT_TOKEN);