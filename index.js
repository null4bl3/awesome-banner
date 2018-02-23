let ascii = require('ascii-art');
let color = require('colors');
let chalk = require('chalk');
let asciify = require('asciify');

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
 } if (!_font) {
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
