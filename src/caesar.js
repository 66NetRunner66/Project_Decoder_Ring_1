// Please refrain from tampering with the setup code provided here,
// as the index.html and lovely files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar (input, shift, encode = true) {
    // your solution code here
    const alph = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    //error message
    input = input.toLowerCase ();
    if (shift == null) return false;
    if (shift < -25 || shift === 0 || shift > 25) {
      return false;
    }
    // Make a return variable
    let finished = '';
    if (encode) {
      let amountLeft = 0;
      let newShift = 0;

      for (let i = 0; i < input.length; i++) {
        //loop thru input
        //chek if each character in the input is a letter

        if (!input[i].match (/[a-z]/)) {
          //if it isn't a letter ignore it
          finished += input[i];
        }

        for (let j = 0; j < alph.length; j++) {
          //loop thru alphabet variable we created above
          if (input[i] == alph[j]) {
            //for each character in the alphabet we check if it matches
            //each character in the input
            if (alph[j + shift]) {
              //when it matches we add the letter [amount shift is] spaces away
              finished += alph[j + shift];
            } else if (shift > 0) {
              //check how far on the other side of the alphabet we are shifting
              amountLeft = alph.length - 1 - j;
              newShift = shift - amountLeft;
              //add shifted letter
              finished += alph[newShift - 1];
            } else if (shift < 0) {
              amountLeft = shift + j;
              finished += alph[25 + amountLeft + 1];
            }
          }
        }
      }
      return finished;
    }

    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
          finished += ' ';
        } else if (1 === 1) {
          // access each character in the input
          let char = input[i];
          // check if the character is a letter
          if (char.match (/[a-z]/i)) {
            //turn to a number
            const charcode = input.charCodeAt (i);
            let temp = charcode - 97 - shift;
            if (temp >= 0) {
              char = String.fromCharCode (temp % 26 + 97);
            } else {
              char = String.fromCharCode (26 + temp + 97);
            }
          }
          // add to the finished string
          finished += char;
        }
      }
      return finished.toLowerCase ();
    }
  }

  return {
    caesar,
  };
}) ();
console.log (caesarModule.caesar ('lovely', 4, (encode = true)));
console.log (caesarModule.caesar ('pszipc', 4, (encode = false)));
module.exports = caesarModule.caesar;
