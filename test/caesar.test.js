//const { Cipher } = require("js-cipher");
//const {mocha} = require("mocha","chai");
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

    describe("caesar", () => {
        it("should return pszipc pszipc9_,,", () => {
            const expected = "pszipc pszipc9_,,";
            const actual = caesar("lovely lovely9_,,",4,encode=true);
            //console.log(actual, expected);
            expect(actual).to.eql(expected);

        });
    
   
        it("should decode the secret messge",()=>{
            const expected = "lovely";
            const actual = caesar("pszipc",4,encode=false);
            console.log (actual, expected);
            expect(actual).to.eql(expected);
        });
    
        it("should shift the input to the right if a positive shift value is given", () => {
          let expected = "wklqnixo";
          let actual = caesar("thinkful", 3);
          expect(actual).to.equal(expected);
        });
        it("should remind you that YOU ARE LOVED", () => {
            let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            expect(actual).to.eql(expected);});
        it("should shift the input to the left if a negative shift value is given", () => {
          let expected = "qefkhcri";
          let actual = caesar("thinkful", -3);
          expect(actual).to.equal(expected);
        });
        it("should decode the input if a third argument of false is provided", () => {
          let expected = "thinkful";
          let actual = caesar("wklqnixo", 3, false);
          expect(actual).to.equal(expected);
        });
        it("should maintain spaces when encoding input", () => {
          let expected = "bpqa qa i amkzmb umaaiom!";
          let actual = caesar("This is a secret message!", 8);
          expect(actual).to.equal(expected);
        });
        it("should remind you that YOU ARE A BEAUTIFUL HUMAN BEING!", () => {
            let actual = "You are a beautiful Human Being";
            let expected = "You are a beautiful Human Being";
            expect(actual).to.eql(expected);});
        
        it("should return false if the shift value is equal to 0", () => {
          let actual = caesar("thinkful", 0);
          expect(actual).to.be.false;
        });
        it("should return false if the shift value is less than -25", () => {
          let actual = caesar("thinkful", -26);
          expect(actual).to.be.false;
        });
        it("should return false if the shift value is greater than 25", () => {
          let actual = caesar("thinkful", 99);
          expect(actual).to.be.false;
        });
        it("should wrap around the alphabet when shifting right.", () => {
          let actual = caesar("xyz", 3);
          let expected = "abc";
          expect(actual).to.equal(expected);
        });
        it("should remind you that I REALLY MEAN IT! YOU ARE AWESOME M8!", () => {
            let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            expect(actual).to.eql(expected);});
        
        it("should ignore captial letters", () => {
          let testA = caesar("thinkful", 12);
          let testB = caesar("ThINkfUl", 12);
          expect(testA).to.equal(testB);
        });



        it("should wrap around the alphabet when shifting left.", () => {
            let actual = caesar("abc", -3);
            let expected = "xyz";
            expect(actual).to.equal(expected);
          });
          it("should remind you TO KEEP GOING", () => {
            let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            expect(actual).to.eql(expected);});

          it("should wrap around the alphabet when shifting left during decode.", () => {
            let actual = caesar("abc", -3, encode=false);
            let expected = "def";
            expect(actual).to.equal(expected);
          });
          it("should return false if the shift value is not present", () => {
            let actual = caesar("thinkful");
            expect(actual).to.be.false;
          });
          it("should maintain spaces when decoding input", () => {
            let expected = "this is a secret message!";
            let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            expect(actual).to.equal(expected);
          });

      });
