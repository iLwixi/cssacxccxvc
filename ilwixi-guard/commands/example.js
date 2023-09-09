const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Command Title")
    .setDescription("**https://discord.gg/76K4tE9mkA**")
    .setColor("#007fff")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "test"
};
// Çalanlara;
// Ben hakkımı helal etmiyorum hocam
// Discord.gg/neksare #emreconf'a aittir.