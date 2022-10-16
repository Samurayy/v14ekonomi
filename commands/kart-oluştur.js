const db = require('croxydb');
const ms = require('ms')
const moment = require("moment");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
    .setTitle("Kredi Kart!")
    .setDescription("Aşağıdaki butondan kredi kartı oluşturabilirsin!")
    .setColor("#0000ff")
    const row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setEmoji("💳")
.setStyle(ButtonStyle.Danger)
.setCustomId("oluştur")
)
message.channel.send({embeds: [embed], components: [row]})


}
exports.conf = {
  aliases: ["kart","Kart"],
  permLevel: 0
};

exports.help = {
  name: 'kart'
};