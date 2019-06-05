// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let distance = Math.abs(someValue - 42);
  return distance;
}

function distanceFromHqInFeet(someValue) {
  let distance = distanceFromHqInBlocks(someValue) * 264;
  return distance;
}

function distanceTravelledInFeet(value1, value2) {
  let distanceInBlocks = Math.abs(value1 - value2);
  let distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  let price;

  switch (distance) {
    case distance >= 2500:
        price = 'sorry we cant do that';
    case sitance <= 400:
        price = 0;
        canEnlist = true;
    case age >= 16:
        canWork = true;
}
}
