function sumDivisibleBySeven(start, end) {
  let sum = 0;
  for (let _ = start; _ <= end; _++) {
    if (_ % 7 == 0) {
      sum += _;
    }
  }
  console.log(
    `Sum of numbers divisible by 7 between ${start} and ${end} is:  ${sum}`
  );
}

sumDivisibleBySeven(18, 534);