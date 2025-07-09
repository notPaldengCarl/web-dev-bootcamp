const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What is your name? ", function(name1) {
    rl.question("What is your height in meters? ", function(heightInput){
         rl.question("What is your weight in kg? ", function(weightInput){
    console.log("Hello, " + name1)

var height = parseFloat(heightInput);
var weight = parseFloat(weightInput);
var bmi = weight / (height*height);

  if (bmi <18.5){
  console.log("Your BMI is " + bmi + "," + " so you are underweight");
  }
  if (bmi >= 18.5 && bmi <= 24.9){
  console.log("Your BMI is " + bmi + "," + " so you are have a normal weight");
  }
  if (bmi > 24.9){
  console.log("Your BMI is " + bmi + "," + " so you are overweight");
  }
  rl.close();
  });
  });
});
