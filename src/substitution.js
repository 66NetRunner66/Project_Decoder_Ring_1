// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isDuplicates (alphabet) {
    let array = [];
    for (let i = 0; i < alphabet.length; i++) {
      if (array.includes (alphabet[i])) {
        return true;
      }
      array.push (alphabet[i]);
    }
    return false;
  }

  function substitution (input, alphabet, encode = true) {
    realAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!alphabet) {
      return false;
    } else if (alphabet.length != 26) {
      return false;
    } else {
      transmuted = alphabet.toLowerCase ();
    }
    //check if there is duplicates
    if (isDuplicates (alphabet)) {
      return false;
    }

    word = input;
    word = word.toUpperCase ();
    i = 0;
    result = '';
    if (encode) {
      while (i < word.length) {
        ind = realAlphabet.indexOf (word.charAt (i));
        lettuh = word.charAt (i);

        if (lettuh === ' ') {
          result = result + lettuh;
        }

        result = result + alphabet.charAt (ind);
        console.log (result);
        i++;
      }
      return result.toLowerCase ();
    }

    j = 0;

    if (!encode) {
      word = word.toLowerCase ();
      while (j < word.length) {
        ind = transmuted.indexOf (word.charAt (j));
        lettuh = word.charAt (j);
        console.log (lettuh);
        if (lettuh === ' ') {
          result = result + lettuh;
        }
        result = result + realAlphabet.charAt (ind);
        console.log (result);
        j++;
      }
      console.log (result);
      return result.toLowerCase ();
    }
  }
  return {
    substitution,
  };
}) ();

module.exports = substitutionModule.substitution;
