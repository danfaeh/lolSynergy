var mongoose = require('mongoose');
var Champion = require("../models/Champion");

if (env === ‘development’) {
  mongoose.connect('mongodb://localhost/lol-synergy');
}else {
  mongoose.connect('mongodb://danfaeh:Saxophone13@ds053178.mongolab.com:53178/lol-synergy)'
}

//clears all database entries.
Champion.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

 var champions = [
  {name: "Aatrox",       position: "top",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:true,     aram: "1"},  
  {name: "Ahri",         position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Akali",        position: "mid",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "1"},
  {name: "Alistar",      position: "support", damage: "ap", softcc: 0, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Amumu",        position: "jungle",  damage: "ap", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Anivia",       position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Annie",        position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Ashe",         position: "adc",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Aurelion Sol", position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Azir",         position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Bard",         position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: false,  engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Blitzcrank",   position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Brand",        position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Braum",        position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Caitlyn",      position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Cassiopeia",   position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Cho'Gath",     position: "top",     damage: "ap", softcc: 2, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Corki",        position: "mid",     damage: "ap", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Darius",       position: "top",     damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: false,    seige:false,  waveclear:true,     aram: "2"},
  {name: "Diana",        position: "jungle",  damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Dr-Mundo",     position: "top",     damage: "ap", softcc: 1, hardcc: 0,   tank: true,   engage: false,    seige:true,   waveclear:false,    aram: "3"},
  {name: "Draven",       position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Ekko",         position: "top",     damage: "ap", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Elise",        position: "jungle",  damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "2"},
  {name: "Evelynn",      position: "jungle",  damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "1"},
  {name: "Ezreal",       position: "adc",     damage: "ad", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},  
  {name: "Fiddlesticks", position: "jungle",  damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "3"},
  {name: "Fiora",        position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "2"},
  {name: "Fizz",         position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Galio",        position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Gangplank",    position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Garen",        position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: true,   engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Gnar",         position: "top",     damage: "ad", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Gragas",       position: "jungle",  damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Graves",       position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Hecarim",      position: "jungle",  damage: "ad", softcc: 0, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Heimerdinger", position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Illaoi",       position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: true,   engage: false,    seige:false,  waveclear:false,    aram: "2"},
  {name: "Irelia",       position: "top",     damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "2"},
  {name: "Janna",        position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: false,  engage: false,    seige:false,  waveclear:false,    aram: "3"},
  {name: "Jarvan IV",    position: "jungle",  damage: "ad", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Jax",          position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Jayce",        position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Jhin",         position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},  
  {name: "Jinx",         position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Kalista",      position: "adc",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Karma",        position: "support", damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Karthus",      position: "mid",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Kassadin",     position: "mid",     damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Katarina",     position: "mid",     damage: "ap", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Kayle",        position: "mid",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Kennen",       position: "top",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:true,     aram: "2"},
  {name: "Kha'Zix",      position: "jungle",  damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:false,    aram: "1"},
  {name: "Kindred",      position: "jungle",  damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "2"},
  {name: "Kog'Maw",      position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "LeBlanc",      position: "mid",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Lee Sin",      position: "jungle",  damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "3"},
  {name: "Leona",        position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Lissandra",    position: "mid",     damage: "ap", softcc: 2, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Lucian",       position: "adc",     damage: "ad", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Lulu",         position: "mid",     damage: "ap", softcc: 1, hardcc: 2,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Lux",          position: "mid",     damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},  
  {name: "Malphite",     position: "top",     damage: "ap", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "3"},
  {name: "Malzahar",     position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Maokai",       position: "top",     damage: "ap", softcc: 2, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "2"},
  {name: "Master Yi",    position: "jungle",  damage: "ad", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Miss Fortune", position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Mordekaiser",  position: "top",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "1"},
  {name: "Morgana",      position: "support", damage: "ap", softcc: 2, hardcc: 1,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "3"},
  {name: "Nami",         position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: false,  engage: true,     seige:false,  waveclear:false,    aram: "3"},
  {name: "Nasus",        position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: true,   engage: false,    seige:true,   waveclear:false,    aram: "2"},
  {name: "Nautilus",     position: "top",     damage: "ap", softcc: 2, hardcc: 2,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Nidalee",      position: "jungle",  damage: "ap", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "3"},
  {name: "Nocturne",     position: "jungle",  damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Nunu",         position: "jungle",  damage: "ap", softcc: 2, hardcc: 0,   tank: true,   engage: false,    seige:false,  waveclear:false,    aram: "2"},
  {name: "Olaf",         position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:false,    aram: "1"},
  {name: "Orianna",      position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Pantheon",     position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Poppy",        position: "top",     damage: "ad", softcc: 0, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Quinn",        position: "top",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},  
  {name: "Rammus",       position: "jungle",  damage: "ap", softcc: 0, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Rek'Sai",      position: "jungle",  damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "1"},
  {name: "Renekton",     position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "2"},
  {name: "Rengar",       position: "jungle",  damage: "ad", softcc: 2, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Riven",        position: "top",     damage: "ad", softcc: 0, hardcc: 2,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Rumble",       position: "top",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Ryze",         position: "mid",     damage: "ap", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Sejuani",      position: "jungle",  damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "2"},
  {name: "Shaco",        position: "jungle",  damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:false,    aram: "2"},
  {name: "Shen",         position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "2"},
  {name: "Shyvana",      position: "jungle",  damage: "ad", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Singed",       position: "top",     damage: "ap", softcc: 2, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Sion",         position: "top",     damage: "ad", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Sivir",        position: "adc",     damage: "ad", softcc: 0, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},  
  {name: "Skarner",      position: "jungle",  damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "1"},
  {name: "Sona",         position: "support", damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:false,    aram: "4"},
  {name: "Soraka",       position: "support", damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "3"},
  {name: "Swain",        position: "top",     damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "2"},
  {name: "Syndra",       position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "2"},
  {name: "Tahm Kench",   position: "support", damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:false,  waveclear:true,     aram: "3"},
  {name: "Talon",        position: "mid",     damage: "ad", softcc: 2, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Taric",        position: "support", damage: "ap", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "2"},
  {name: "Teemo",        position: "top",     damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Thresh",       position: "support", damage: "ad", softcc: 2, hardcc: 2,   tank: false,  engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Tristana",     position: "adc",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Trundle",      position: "top",     damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Tryndamere",   position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "1"},
  {name: "Twisted Fate", position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},  
  {name: "Twitch",       position: "adc",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},
  {name: "Udyr",         position: "jungle",  damage: "ad", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Urgot",        position: "mid",     damage: "ad", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:false,    aram: "2"},
  {name: "Varus",        position: "mid",     damage: "ap", softcc: 2, hardcc: 0,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Vayne",        position: "adc",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "2"},
  {name: "Veigar",       position: "mid",     damage: "ap", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"},
  {name: "Vel'Koz",      position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Vi",           position: "jungle",  damage: "ad", softcc: 0, hardcc: 2,   tank: false,   engage: true,     seige:true,   waveclear:false,   aram: "2"},
  {name: "Viktor",       position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:false,    aram: "3"},
  {name: "Vladimir",     position: "top",     damage: "ap", softcc: 0, hardcc: 0,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "2"},
  {name: "Volibear",     position: "jungle",  damage: "ap", softcc: 1, hardcc: 1,   tank: true,   engage: true,     seige:true,   waveclear:false,    aram: "3"},
  {name: "Warwick",      position: "jungle",  damage: "ad", softcc: 0, hardcc: 1,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "1"},
  {name: "Wukong",       position: "top",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "3"}, 
  {name: "Xerath",       position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Xin Zhao",     position: "jungle",  damage: "ad", softcc: 1, hardcc: 2,   tank: false,  engage: true,     seige:true,   waveclear:false,    aram: "2"},
  {name: "Yasuo",        position: "mid",     damage: "ad", softcc: 0, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"},
  {name: "Yorick",       position: "top",     damage: "ad", softcc: 1, hardcc: 0,   tank: true,   engage: false,    seige:false,  waveclear:true,     aram: "1"},  
  {name: "Zac",          position: "jungle",  damage: "ap", softcc: 1, hardcc: 2,   tank: true,   engage: true,     seige:false,  waveclear:false,    aram: "2"},
  {name: "Zed",          position: "mid",     damage: "ad", softcc: 1, hardcc: 0,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "2"},
  {name: "Ziggs",        position: "mid",     damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:true,   waveclear:true,     aram: "3"},           
  {name: "Zilean",       position: "support", damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: false,    seige:false,  waveclear:true,     aram: "3"},
  {name: "Zyra",         position: "support", damage: "ap", softcc: 1, hardcc: 1,   tank: false,  engage: true,     seige:true,   waveclear:true,     aram: "2"}
  ];


Champion.create(champions, function(err, docs) {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Created:", docs);
    mongoose.connection.close();
  }
});