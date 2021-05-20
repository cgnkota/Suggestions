﻿const Eris = require("eris");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  function colorToSigned24Bit(s) {
    return (parseInt(s.substr(1), 16) << 8) / 256;
}

let dil = db.fetch(`dil_${message.guildID}`) || "english";

if (dil == "english") {

if (!message.member.permissions.has('administrator')) return message.channel.createMessage(`You must have Administrator permission to use this command.`)

  if (db.has(`denyvoting_${message.guildID}`)) {
    db.delete(`denyvoting_${message.guildID}`)
    message.channel.createMessage(`Successfully allowed voting for suggestions.`)
  }else{
    db.set(`denyvoting_${message.guildID}`, 'true')
    message.channel.createMessage(`Successfully denied voting for suggestions.`)
  }
}

if (dil == "turkish") {

  if (!message.member.permissions.has('administrator')) return message.channel.createMessage(`Bu komudu kullanmak için Yönetici yetkisine sahip olmalısın.`)
  
    if (db.has(`denyvoting_${message.guildID}`)) {
      db.delete(`denyvoting_${message.guildID}`)
      message.channel.createMessage(`Başarıyla önerilerde oylama açıldı.`)
    }else{
      db.set(`denyvoting_${message.guildID}`, 'true')
      message.channel.createMessage(`Başarıyla önerilerde oylama kapatıldı.`)
    }
  }
}

module.exports.help = {
  name: "allowvote",
  nametr: "oylamaizni",
  aliase: ["allowvoting", "oylamaizni"],
  descriptionen: "Sets the users can vote suggestions or not. (default: true)",
  descriptiontr: "Kullanıcıların önerileri oylayabilip oylayamayacağını seçer. (normali: evet)",
  usageen: "allowvote",
  usagetr: "önek [yeni önek]",
  category: 'admin'
}