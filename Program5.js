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
   * counting happiness
   */
  for (let _ = 0; _ < happyWords.length; _++) {
    if (tweet.includes(happyWords[_])) {
      happyCount++;
    }
  }

  /**
   * counting sadness
   */
  for (let _ = 0; _ < sadWords.length; _++) {
    if (tweet.includes(sadWords[_])) {
      sadCount++;
    }
  }

  /**
   * determining happiness or sadness
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
