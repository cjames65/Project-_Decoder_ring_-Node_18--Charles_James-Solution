// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   // substitution alphabet must exist and be exactly 26 characters long.
   if (!alphabet || alphabet.length !== 26) return false;

   // split the standard alphabet, input string, and substitution alphabet into arrays of lowercase characters.
   const realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
   const inputArray = input.toLowerCase().split("");
   const subAlphabetArray = alphabet.toLowerCase().split("");

   // substitution alphabet can not have any repeated characters
   const onlyUniqueChars = subAlphabetArray.filter(
     (item, index, self) => self.indexOf(item) === index
   );
   if (onlyUniqueChars.length !== alphabet.length) return false;

   //encode each character of the input string based on the substitution alphabet and returns the encoded result as a string.
   const encodeMessage = () => {
     let result = [];
     const encode = (char) => {
       const charIndex = realAlphabetArray.indexOf(char);
       const encodedChar = subAlphabetArray[charIndex];
       result.push(encodedChar);
     };
     inputArray.forEach((char) => {
       // preserves space or encodes character
       char === " " ? result.push(" ") : encode(char);
     });
     return result.join("");
   };

   // decode each character of the input string based on the substitution alphabet and returns the decoded result as a string.
   const decodeMessage = () => {
     let result = [];
     const decode = (char) => {
       const charIndex = subAlphabetArray.indexOf(char);
       const decodedChar = realAlphabetArray[charIndex];
       result.push(decodedChar);
     };
     inputArray.forEach((char) => {
       // preserves space or encodes character
       char === " " ? result.push(" ") : decode(char);
     });
     return result.join("");
   };

   // with errors now handled, next decide to encode or decode.
   return encode ? encodeMessage() : decodeMessage();
 }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
