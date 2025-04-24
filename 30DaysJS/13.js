// // This function counts the number of vowels and consonants in a given string

function findVowelAndConsonant(string) {
  string = string.toLowerCase();
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowelCount++;
    } else if (consonants.includes(string[i])) {
      consonantCount++;
    } else {
      console.log(string[i], "neither vowel nor consonant");
    }
  }
  return { vowelCount, consonantCount };
}

console.log(findVowelAndConsonant("Hello World 123"));
