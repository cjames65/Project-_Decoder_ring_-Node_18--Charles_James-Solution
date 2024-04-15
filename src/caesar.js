// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // Validate the shift value
    // Checks to see if shift value is present, less than 25 or more than 25
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }
  // Prepare the input text
  // convert string into lower case 
  const inputText = input.toLowerCase();
  // convert sting into array of char's 
  const inputArray = inputText.split('');

  // Shift operation: 
  /* Map method used to iterate over inputArray and create array 
     with results of callback function (char => { if (char.match(/[a-z]/))
  */
  const shiftedArray = inputArray.map(char => {

    // Checks if the current character (char) is a lowercase letter from 'a' to 'z'. 
    // match() method is used with expression [a-z] to check if the character matches any lowercase letter.
    if (char.match(/[a-z]/)) {
      //charCodeAt returns the unicode of the character and stores it in variable charCode.
      let charCode = char.charCodeAt(0);

      /* if checks if the parameter (encode) is true or not since that determines
         if we encode or decode.
      */
      if (encode) {
        //Encoding 
        // (charCode - 97) converts the Unicode value of the character to a value between 0 and 25, representing its position in the alphabet.
        // (+ shift) shifts the character position to the right by the specified shift amount.
        // (% 26) ensures if the shifted value goes beyond the alphabet range of 0-25, it wraps around.
        /* (+ 26) % 26) This additional step ensures that negative values of (charCode - 97 + shift) are handled correctly. 
            Adding 26 ensures that the result is positive before applying the modulus operation.
        */
        // (+ 97) Finally, adding 97 converts the character position value back to its corresponding Unicode value.
        charCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
      } else {
        // When decoding (encode is false), the logic is similar, except that we subtract the shift value instead of adding it. 
        charCode = ((charCode - 97 - shift) % 26 + 26) % 26 + 97;
      }
      // onverts the modified Unicode value back to char.
      return String.fromCharCode(charCode);
    }
    return char;
  });

  // Return the encoded or decoded text
  return shiftedArray.join('');
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
