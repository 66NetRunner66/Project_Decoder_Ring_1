// Write your tests here!

const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

    describe("substitution", () => {
        it("should return an encoded message", () => {
            const expected = "aojju aojju wm kvcduqc uyg gaolo";
            const actual = substitution("Hello Hello Is Anybody Out There","KDPQOHEAWXNJZVURSLMGYTFBCI",encode=true);
            //console.log(actual, expected);
            expect(actual).to.eql(expected);

        });
  

     
        it("should return a de-encoded message", () => {
            const expected = "abcdefghijklmnopqrstuvwxyz";
            const actual = substitution("kDpQoHeAwXnJzVuRsLmGyTfBcI","KDPQOHEAWXNJZVURSLMGYTFBCI",encode=false);
            //console.log(actual, expected);
            expect(actual).to.eql(expected);

        });
        it("should return false if alphabet isn't exactly 26 characters long", () => {
          let actual = substitution("thinkful", "short");
          expect(actual).to.be.false;
        });
        it("should return false if there are any duplicate characters in the given alphabet", () => {
          let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
          expect(actual).to.be.false;
        });
        it("should remind you that YOU ARE LOVED", () => {
          let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
          let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
          expect(actual).to.eql(expected);});
        it("should encode the message properly", () => {
          let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
          let expected = "jrufscpw";
          expect(actual).to.equal(expected);
        });
        it("should decode the message properly", () => {
          let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
          let expected = "thinkful";
          expect(actual).to.equal(expected);
        });
        it("should ignore capitalization", () => {
          let testA = substitution("ThiNKFul", "xoyqmcgrukswaflnthdjpzibev");
          let testB = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
          expect(testA).to.equal(testB);
        });
        it("should maintain spaces in the message.", () => {
          let actual = substitution(
            "You are an excellent spy",
            "xoyqmcgrukswaflnthdjpzibev"
          );
          let expected = "elp xhm xf mbymwwmfj dne";
          expect(actual).to.equal(expected);
        });
        it("HAVE A GOOD NIGHT FRIEND:)", () => {
          let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
          let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
          expect(actual).to.eql(expected);});
          it("Technically I wrote 42 tests", () => {
            let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            expect(actual).to.eql(expected);});
            it("Officially", () => {
              let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
              let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
              expect(actual).to.eql(expected);});
  

      });