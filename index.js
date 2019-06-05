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

  if (distance > 2500) {
    price = 'cannot travel that far';
  } else {
    if (distance < 401) {
      price = 0
    }
    else if (distance > 2000) {
      price = 25
    }
    else {
      price = Math.round(distance * .02 - 8)
    }
  }
return price;
}
