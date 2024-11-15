function lifeInWeeks(age) {
  var left = 90 - age;
  var x = 365; //year
  var y = 52; //weeks
  var z = 12; //months

  console.log(
    "You have " +
      left * x +
      " days, " +
      left * y +
      " weeks, and " +
      left * z +
      " months left."
  );
}

lifeInWeeks(25);

//run code on terminal node lifeinweeks.js
