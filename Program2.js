function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

console.log(`Number of vowels are: ${countVowels("The quick brown fox")}`);