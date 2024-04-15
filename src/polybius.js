// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // defines a grid called square that represents the Polybius square. This grid maps each letter of the alphabet to a pair of coordinates.
    let square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    // encoding
    // if encode is true, the function encodes the input text.
    if (encode) {
      let inputArray = input.split("");
      /* fixedInputArray:
        - replaces any "i" or "j" in the input string to be "(i/j)" to conform to square
        - forces everything to lowercase.
     */
      let fixedInputArray = inputArray.map((string) => {

        //converts the input text to lowercase and replaces any occurrences of "i" or "j" with "(i/j)" to conform to the Polybius square.
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      // Finds X and Y coordinates
      let xArr = [];

      //iterate through each character of the input text and finds its corresponding coordinates in the square grid.
      let yArr = fixedInputArray.map((letter) => {
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            xArr.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
          }
        }
      });

      // adds x-coordinate and y-coordinate arrays together so X/Y pairs are in sequence
      result = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        // converts numeric representation of a space back to " ".
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    // decoding
    // If encode is false, the function decodes the input text.
    if (!encode) {
      // replace any spaces in the input text with the numeric representation of a space, which is 65.
      let spacesAdded = input.replace(" ", 65);
      // check that there are an even number of characters so that all coordinate pairs are kept together
      // check if the length of the modified input is even to ensure that each coordinate pair is complete.
      if (spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      //split the input into pairs of characters and uses them as coordinates to retrieve the corresponding letters from the square grid.
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return square[rowIndex][columnIndex];
      });
    }
    // output
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
