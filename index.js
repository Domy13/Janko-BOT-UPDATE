const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("guildMemberAdd", member => {
  const WelcomeChanel = member.guild.channels.cache.find(channel => channel.name === '📝naplata-štete')
  WelcomeChanel.send (`⚠️🔞 ${member} **SE PRIDRUŽIO SERVERU!**  (*šteta 5000€*)`)

})
client.on("message", (message) => {
  if (message.content === "Janko") {
    message.reply("ja sam vaš spiritualni vođa, što trebate?");
  } else
 
  if (message.content.includes("šteta")) {
    message.channel.send("Procijenjujem štetu na " + Math.floor(Math.random() * 100000) + "€");
  } else

  if (message.content.includes("steta")) {
    message.channel.send("Procijenjujem štetu na " + Math.floor(Math.random() * 100000) + "€");
  } else

  if (message.content.includes("klasa")) {
    message.channel.send("Preporučujem da uzmete " + (Math.floor(Math.random() * 10) + 5) + " komada, ali ne nikako više od 16 jer će kazna biti prevelika!");
  } 

});
client.login(process.env.token);
