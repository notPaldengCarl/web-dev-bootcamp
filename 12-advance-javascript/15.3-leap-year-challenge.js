const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a year to check if it's a leap year: ", function(inputYear) {
  const year = parseFloat(inputYear);

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year ");
  } else {
    console.log(year + " is not a leap year");
  }

  rl.close();
});
