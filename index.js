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

  switch (price) {
    case distance >= 2500:
        price = 'sorry we cant do that';
    case distance <= 400:
        price = 0;
    case 400 < distance < 2000:
        price = distance * .02 ;
}
return distance;
}
