/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var as = [...str1];
  var at = [...str2];
  var ass = as.sort();
  var ats = at.sort();
  var areEqual = ass.every((element, index) => element === ats[index]);
  return areEqual;
}

module.exports = isAnagram;
