var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/lol-synergy');
var Champion = require("../models/Champion");

//clears all database entries.
Champion.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

 var champions = [
  {name: "Aatrox",       position: "top",     damage: "ad",  hardcc: 1, tank: false, engage: false,   seige:false, waveclear:false,      aram: "weak"},
  {name: "Ahri",         position: "mid",     damage: "ap",  hardcc: 1,  tank: false, engage: false,   seige:true, waveclear:true,      aram: "medium"},
  {name: "Akali",        position: "mid",     damage: "ap",  hardcc: 0, tank: false, engage: false,   seige:false, waveclear:false,      aram: "weak"},
  {name: "Alistar",      position: "support", damage: "ap",  hardcc: 2,  tank: true, engage: true,     seige:true, waveclear:true,      aram: "strong"},
  {name: "Amumu",        position: "jungle",  damage: "ap",  hardcc: 2, tank: true, engage: true,     seige:false, waveclear:false,      aram: "strong"},
  {name: "Anivia",       position: "mid",     damage: "ap",  hardcc: 1,  tank: false, engage: false,   seige:true, waveclear:true,      aram: "medium"},
  {name: "Annie",        position: "mid",     damage: "ap",  hardcc: 1, tank: false, engage: false,   seige:false, waveclear:false,    aram: "strong"},
  {name: "Ashe",         position: "adc",     damage: "ad",  hardcc: 1,  tank: false, engage: true,    seige:true, waveclear:true,      aram: "medium"},
  {name: "Aurelion Sol", position: "mid",     damage: "ap",  hardcc: 1, tank: false, engage: true,    seige:false, waveclear:false,      aram: "medium"},
  {name: "Azir",         position: "mid",     damage: "ap",  hardcc: 1,  tank: false, engage: false,   seige:true, waveclear:true,      aram: "medium"},
  {name: "Bard",         position: "support", damage: "ap",  hardcc: 1,  tank: false, engage: true,    seige:true, waveclear:true,      aram: "medium"},
  {name: "Blitzcrank",   position: "support", damage: "ap",  hardcc: 3,  tank: true, engage: true,     seige:true, waveclear:true,      aram: "strong"},
  {name: "Brand",        position: "support", damage: "ap",  hardcc: 1, tank: false, engage: false,   seige:false, waveclear:false,      aram: "medium"},
  {name: "Braum",        position: "support", damage: "ap",  hardcc: 2, tank: true, engage: true,     seige:false, waveclear:false,      aram: "medium"}
  // {name: "Caitlyn"},
  // {name: "Cassiopeia"},
  // {name: "Cho'Gath"},
  // {name: "Corki"},
  // {name: "Darius"},
  // {name: "Diana"},
  // {name: "Dr-Mundo"},
  // {name: "Draven"},
  // {name: "Ekko"},
  // {name: "Elise"},
  // {name: "Evelynn"},
  // {name: "Ezreal"},  
  // {name: "Fiddlesticks"},
  // {name: "Fiora"},
  // {name: "Fizz"},
  // {name: "Galio"},
  // {name: "Gangplank"},
  // {name: "Garen"},
  // {name: "Gnar"},
  // {name: "Gragas"},
  // {name: "Graves"},
  // {name: "Hecarim"},
  // {name: "Heimerdinger"},
  // {name: "Illaoi"},
  // {name: "Irelia"},
  // {name: "Janna"},
  // {name: "Jarvan IV"},
  // {name: "Jax"},
  // {name: "Jayce"},
  // {name: "Jhin"},  
  // {name: "Jinx"},
  // {name: "Kalista"},
  // {name: "Karma"},
  // {name: "Karthus"},
  // {name: "Kassadin"},
  // {name: "Katarina"},
  // {name: "Kayle"},
  // {name: "Kennen"},
  // {name: "Kha'Zix"},
  // {name: "Kindred"},
  // {name: "Kog'Maw"},
  // {name: "LeBlanc"},
  // {name: "Lee Sin"},
  // {name: "Leona"},
  // {name: "Lissandra"},
  // {name: "Lucian"},
  // {name: "Lulu"},
  // {name: "Lux"},  
  // {name: "Malphite"},
  // {name: "Malzahar"},
  // {name: "Maokai"},
  // {name: "Master Yi"},
  // {name: "Miss Fortune"},
  // {name: "Mordekaiser"},
  // {name: "Morgana"},
  // {name: "Nami"},
  // {name: "Nasus"},
  // {name: "Nautilus"},
  // {name: "Nidalee"},
  // {name: "Nocturne"},
  // {name: "Nunu"},
  // {name: "Olaf"},
  // {name: "Orianna"},
  // {name: "Pantheon"},
  // {name: "Poppy"},
  // {name: "Quinn"},  
  // {name: "Rammus"},
  // {name: "Rek'Sai"},
  // {name: "Renekton"},
  // {name: "Rengar"},
  // {name: "Riven"},
  // {name: "Rumble"},
  // {name: "Ryze"},
  // {name: "Sejuani"},
  // {name: "Shaco"},
  // {name: "Shen"},
  // {name: "Shyvana"},
  // {name: "Singed"},
  // {name: "Sion"},
  // {name: "Sivir"},  
  // {name: "Skarner"},
  // {name: "Sona"},
  // {name: "Soraka"},
  // {name: "Swain"},
  // {name: "Syndra"},
  // {name: "Tahm Kench"},
  // {name: "Talon"},
  // {name: "Taric"},
  // {name: "Teemo"},
  // {name: "Thresh"},
  // {name: "Tristana"},
  // {name: "Trundle"},
  // {name: "Tryndamere"},
  // {name: "Twisted Fate"},  
  // {name: "Twitch"},
  // {name: "Udyr"},
  // {name: "Urgot"},
  // {name: "Varus"},
  // {name: "Vayne"},
  // {name: "Veigar"},
  // {name: "Vel'Koz"},
  // {name: "Volibear"},
  // {name: "Warwick"},
  // {name: "Wukong"}, 
  // {name: "Xerath"},
  // {name: "Xin Zhao"},
  // {name: "Yasuo"},
  // {name: "Yorick"},  
  // {name: "Zac"},
  // {name: "Zed"},
  // {name: "Ziggs"},           
  // {name: "Zilean"},
  // {name: "Zyra"}  
  ];


Champion.create(champions, function(err, docs) {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Created:", docs);
    mongoose.connection.close();
  }
});