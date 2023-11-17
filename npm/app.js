const validator = require("validator");
const chalk = require("chalk");

// Validator
const email = validator.isEmail("zuhdiardi@mail.ugm.ac.id");
console.log(email);

const url = validator.isURL("https://www.google.com");
console.log(url);

// Chalk
const success = chalk.green.bold.inverse("Success!");
console.log(success);

const error = chalk.red.bold.inverse("Error!");
console.log(error);

const pesan = chalk`lorem ipsum dolor sit amet {bgRed.bold.white.underline consectetur adipisicing elit.} lorem ipsum dolor sit amet {bgBlue.bold.white.underline consectetur adipisicing elit.} lorem ipsum dolor sit amet {bgYellow.bold.white.underline consectetur adipisicing elit.}`;
console.log(pesan);
