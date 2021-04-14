const { Client, Discord, MessageEmbed, MessageAttachment } = require('discord.js');
const mongoose = require("mongoose");
const client = global.client;
const moment = require('moment');
const Register = require("../models/Register.js");

exports.execute = async (member) => {
  
let Users = client.users.cache.get(member.id)

var Tarih = "";
if (moment(Users.createdAt).format("MM") === "01") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ocak ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "02") {
var Tarih = `${moment(Users.createdAt).format("DD")} Şubat ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "03") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mart ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "04") {
var Tarih = `${moment(Users.createdAt).format("DD")} Nisan ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "05") {
var Tarih = `${moment(Users.createdAt).format("DD")} Mayıs ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "06") {
var Tarih = `${moment(Users.createdAt).format("DD")} Haziran ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "07") {
var Tarih = `${moment(Users.createdAt).format("DD")} Temmuz ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "08") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ağustos ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "09") {
var Tarih = `${moment(Users.createdAt).format("DD")} Eylül ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "10") {
var Tarih = `${moment(Users.createdAt).format("DD")} Ekim ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "11") {
var Tarih = `${moment(Users.createdAt).format("DD")} Kasım ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
  }
if (moment(Users.createdAt).format("MM") === "12") {
var Tarih = `${moment(Users.createdAt).format("DD")} Aralık ${moment(Users.createdAt).format("YYYY HH:mm:ss")} `;
}
let ggif = ["GİFLİNKİ","GİFLİNKİ","GİFLİNKİ"]

let gif = ggif[Math.floor(Math.random() * ggif.length)]

  
    let control;
    if(Date.now() - member.user.createdAt.getTime() < 1000*60*60*24*7) control = "Riskli"
    else control = "Güvenli "
  
  let embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle('youtube.com/linlords')
.setDescription(
` ** Hoşgeldin! ${member} Seninle birlikte \`${member.guild.memberCount}\` Kişiyiz.**
   **Müsait Olunca **Kayıt Bekleme Alanı**'na Geçip Kaydını Yaptırabilirsin.** 
    <@&KAYITSORUMLUSUROLİD> **olan birisi seninle ilgilenecektir.** 
     Hesabın Oluşturulma Tarihi: **__${Tarih}__** 
      __Bu Hesap ${control} görünüyor__**`
	)
.setImage(gif)
.setFooter(`🍁 LinLord'S Community • youtube.com/linlords`)
    client.channels.cache.get("HOŞGELDİNMESAJIGÖNDERİLECEKKANAL").send("<@"+member+"> / <@&KAYITSORUMLUSUROLİD>").then(x => client.channels.cache.get('HOŞGELDİNMESAJIGÖNDERİLECEKKANAL').send(embed))
  
    //client.channels.cache.get("HOŞGELDİNMESAJIGÖNDERİLECEKKANAL").send(embed)

};

exports.conf = {
  event: "guildMemberAdd"
};