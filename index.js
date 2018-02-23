let ascii = require('ascii-art');
let color = require('colors');
let chalk = require('chalk');
let asciify = require('asciify');
let font_list = [
 "3-d",
 "3x5",
 "5lineoblique",
 "acrobatic",
 "alligator",
 "alligator2",
 "alphabet",
 "app",
 "avatar",
 "banner",
 "banner3-D",
 "banner3",
 "banner4",
 "barbwire",
 "basic",
 "bell",
 "big",
 "bigchief",
 "binary",
 "block",
 "bubble",
 "bulbhead",
 "calgphy2",
 "caligraphy",
 "catwalk",
 "chunky",
 "coinstak",
 "colossal",
 "computer",
 "contessa",
 "contrast",
 "cosmic",
 "cosmike",
 "cricket",
 "cursive",
 "cyberlarge",
 "cybermedium",
 "cybersmall",
 "diamond",
 "digital",
 "doh",
 "doom",
 "dotmatrix",
 "drpepper",
 "eftichess",
 "eftifont",
 "eftipiti",
 "eftirobot",
 "eftitalic",
 "eftiwall",
 "eftiwater",
 "epic",
 "fender",
 "fourtops",
 "fuzzy",
 "goofy",
 "gothic",
 "graffiti",
 "hollywood",
 "invita",
 "isometric1",
 "isometric2",
 "isometric3",
 "isometric4",
 "italic",
 "ivrit",
 "jazmine",
 "jerusalem",
 "katakana",
 "kban",
 "larry3d",
 "lcd",
 "lean",
 "letters",
 "linux",
 "lockergnome",
 "madrid",
 "marquee",
 "maxfour",
 "mike",
 "mini",
 "mirror",
 "mnemonic",
 "morse",
 "moscow",
 "nancyj-fancy",
 "nancyj-underlined",
 "nancyj",
 "nipples",
 "ntgreek",
 "o8",
 "ogre",
 "pawp",
 "peaks",
 "pebbles",
 "pepper",
 "poison",
 "puffy",
 "pyramid",
 "relief",
 "relief2",
 "rev",
 "roman",
 "rot13",
 "rounded",
 "rowancap",
 "rozzo",
 "runic",
 "runyc",
 "sblood",
 "script",
 "serifcap",
 "shadow",
 "short",
 "slant",
 "slide",
 "slscript",
 "small",
 "smisome1",
 "smkeyboard",
 "smscript",
 "smshadow",
 "smslant",
 "smtengwar",
 "speed",
 "stampatello",
 "standard",
 "starwars",
 "stellar",
 "stop",
 "straight",
 "tanja",
 "tengwar",
 "term",
 "thick",
 "thin",
 "threepoint",
 "ticks",
 "ticksslant",
 "tinker-toy",
 "tombstone",
 "trek",
 "tsalagi",
 "twopoint",
 "univers",
 "usaflag",
 "wavy",
 "weird"];

let center = function(_string) {
 return process.stdout.columns / 2 - _string.length / 2;
};

let timer = function() {
 let d = new Date();
 let curr_hour = d.getHours();
 let curr_min = d.getMinutes();
 let curr_sec = d.getSeconds();
 if (curr_sec < 10) {
  curr_sec = "0" + curr_sec;
 }
 if (curr_min < 10) {
  curr_min = "0" + curr_min;
 }
 if (curr_hour < 10) {
  curr_hour = "0" + curr_hour;
 }
 return "Time Updated: " + curr_hour + ":" + curr_min + ":" + curr_sec;
};

exports.banner = (_app, _font) => {
 if (!_app) {
  _app = "THE GREAT NULL";
 } if (!_font || !font_list.includes(_font)) {
  _font = "isometric1'";
 }
 for (let i = 0; i < process.stdout.columns; i++) {
  if (i % 2) {
   process.stdout.write(chalk.green("="));
  } else {
   process.stdout.write(chalk.blue("="));
  }
 }
 asciify(_app, {
  font: _font
 }, (err, res) => {
  let string_list = res.split(/\r?\n/);
  for (let k = 0; k < string_list.length; k++) {
   for (let i = 0; i < (process.stdout.columns / 2 - string_list[k].length / 2); i++) {
    process.stdout.write(" ");
   }
   console.log(string_list[k]);
  }
  for (let i = 0; i < process.stdout.columns; i++) {
   if (i % 2) {
    process.stdout.write(chalk.green("-"));
   } else {
    process.stdout.write(chalk.blue("-"));
   }
  }
  for (let p = 0; p < center(timer()); p++) {
   process.stdout.write(" ");
  }
  process.stdout.write(chalk.blue(" » ") + timer() + chalk.blue(" « "));
  console.log();
  let file_run = "RUNNING FILE: " + process.argv[1];
  for (let i = 0; i < (process.stdout.columns / 2 - file_run.length / 2); i++) {
   process.stdout.write(" ");
  }
  console.log(file_run);
  console.log();
  for (let i = 0; i < process.stdout.columns; i++) {
   if (i % 2) {
    process.stdout.write(chalk.green("="));
   } else {
    process.stdout.write(chalk.blue("="));
   }
  }
 });
 console.log();
};
