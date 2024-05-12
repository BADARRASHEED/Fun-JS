function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}

console.log(`Reverse of your given number is: ${reverseNumber(12345)}`);