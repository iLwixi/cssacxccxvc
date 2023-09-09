const { Client, Intents, MessageActionRow, MessageSelectMenu, Partials, GatewayIntentBits } = require('discord.js');
const config = require("./config.js");


const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);


//-----------------------------------------------------------------------------------------------
// Çalanlara;
// Ben hakkımı helal etmiyorum hocam
// Discord.gg/neksare #emreconf'a aittir.

const anaSunucuID = "796048733418684448";
const altyapiSunucuID = "1125895936527323257";
const logKanalID = "1108839530909409291";


client.on("ready", () => {
  console.log(`Bot giriş yaptı. Bot adı: ${client.user.tag}`);
});

client.on("guildMemberRemove", (member) => {
  if (member.guild.id === anaSunucuID) {
    console.log(`${member.user.tag} kullanıcısı ana sunucudan çıkış yaptı.`);
    
    const altyapiSunucu = client.guilds.cache.get(altyapiSunucuID);
    if (!altyapiSunucu) {
      console.log("Altyapı sunucusu bulunamadı.");
      return;
    }
  
    const altyapiMember = altyapiSunucu.members.cache.get(member.user.id);
    if (altyapiMember) {
      altyapiMember.ban({ reason: "Ana sunucudan çıkış yaptı." })
        .then(() => {
          console.log(`${member.user.tag} kullanıcısı altyapı sunucusundan da banlandı.`);
          const logGuild = client.guilds.cache.get(anaSunucuID);
          if (logGuild) {
            const logChannel = logGuild.channels.cache.get(logKanalID);
            if (logChannel) {
              logChannel.send(`${member.user.tag} kullanıcısı ana sunucudan çıkış yaptı ve altyapı sunucusundan banlandı.`);
            } else {
              console.log("Log kanalı bulunamadı.");
            }
          } else {
            console.log("Ana sunucu bulunamadı.");
          }
        })
        .catch(console.error);
    }
  }
});


//-----------------------------------------------------------------------------------------------
// Çalanlara;
// Ben hakkımı helal etmiyorum hocam
// Discord.gg/neksare #emreconf'a aittir.