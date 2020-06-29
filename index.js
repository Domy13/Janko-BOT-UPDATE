const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("guildMemberAdd", member => {
  const WelcomeChanel = member.guild.channels.cache.find(channel => channel.name === '📝naplata-štete')
  WelcomeChanel.send ('Welcome ${member}  test')

})
client.on("message", msg => {
  if (msg.content === "Janko") {
    msg.reply("ja sam vaš spiritualni vođa, što trebate(TEST)?")
  }
})
client.login(process.env.token);
