const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  
 const embed = new Discord.EmbedBuilder()
.setTitle("Market!")
.addFields({ name: '> Cips', value: `15 TL`, inline: true})
.addFields({ name: '> Hamburger', value: `95 TL`, inline: true})
.addFields({ name: '> Cola ', value: `20 TL`, inline: true})
.addFields({ name: '> Köle', value: `7500 TL`, inline: true})
.addFields({ name: '> Bilgisayar', value: `14500 TL`, inline: true})
.addFields({ name: '> Nft', value: `100000`, inline: true})
.setColor("#0000ff")
message.channel.send({embeds: [embed]})
  
}
exports.conf = {
  
    aliases: ["market","Market","MARKET"],
    permLevel: 0
}

exports.help = {
    name: 'market'
}