function findVowelAndConsonat(string) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  for (let i = 0; i <= string.length; i++) {
    if (vowels.includes(string[i])) {
      return `${string[i]} is a vowel`;
    } else {
      return `${string[i]} is a consonant`;
    }
  }
}

console.log(findVowelAndConsonat("abc"));
