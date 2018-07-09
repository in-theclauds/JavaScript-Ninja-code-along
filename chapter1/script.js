maxCount = 10000;
// console.time begins the counter|
console.time("My Operation")
  for (var n = 0; n < maxCount; n++){
    // perform the operation to be measured
  }
  console.timeEnd("My Operation")
  // ends the timer
