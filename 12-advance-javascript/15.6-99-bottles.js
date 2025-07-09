let bottle = 99;

while (bottle > 0) {
  let bottleWord = bottle === 1 ? "bottle" : "bottles";

  console.log(
    bottle + " " + bottleWord + " of beer on the wall, " +
    bottle + " " + bottleWord + " of beer."
  );

  bottle--;

  let nextBottleWord = bottle === 1 ? "bottle" : "bottles";

  if (bottle > 0) {
    console.log(
      "Take one down, pass it around, " +
      bottle + " " + nextBottleWord + " of beer on the wall.\n"
    );
  } else {
    console.log(
      "Take one down, pass it around, no more bottles of beer on the wall.\n"
    );
  }
}

// Final verse after loop ends
console.log(
  "No more bottles of beer on the wall, no more bottles of beer.\n" +
  "Go to the store and buy some more, 99 bottles of beer on the wall."
);
