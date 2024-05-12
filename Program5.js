function analyzeTweet(tweet) {
  let happyWords = [
    "great",
    "excited",
    "happy",
    "nice",
    "wonderful",
    "amazing",
    "good",
    "best",
  ];
  let sadWords = ["sad", "bad", "tragic", "unhappy", "worst"];
  let happyCount = 0;
  let sadCount = 0;

  /**
   * Counting happiness
   */

  for (let word of happyWords) {
    let regex = new RegExp(word, "gi");
    let matches = tweet.match(regex);
    if (matches) {
      happyCount += matches.length;
    }
  }

  /**
   * Counting sadness
   */

  for (let word of sadWords) {
    let regex = new RegExp(word, "gi");
    let matches = tweet.match(regex);
    if (matches) {
      sadCount += matches.length;
    }
  }

  /**
   * Determining happiness or sadness based on counts
   */
  if (happyCount > sadCount) {
    return "This person is happy";
  } else if (sadCount > happyCount) {
    return "This person is sad";
  } else {
    return "This person is unsure";
  }
}

console.log(analyzeTweet("I am so happy today!")); // happy

console.log(analyzeTweet("I am so sad today!")); // sad

console.log(analyzeTweet("I am sad happy today!")); // unsure