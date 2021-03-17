const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

    describe("polybius", () => {
        it("should return the number value associated to each letter in a string", () => {
            const expected = "11,21,31,41,51,12,22,32,42,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,4555";      
            const actual = polybius("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,yz",encode=true);
            console.log(actual, expected);
            expect(actual).to.eql(expected);

        });
    
      
   
        it("should return false", () => {
            const expected = false;      
            const actual = polybius("11,21,314151122232424252132333435314243444541525354555  55  54  53  66  54",encode=false);
            console.log(actual, expected);
            expect(actual).to.eql(expected);

        });
        it("should encode the input", () => {
            let expected = "4432423352125413";
            let actual = polybius("thinkful");
            expect(actual).to.equal(expected);
          });
          it("should decode the input", () => {
            let expected = "th(i/j)nkful";
            let actual = polybius("4432423352125413", false);
            expect(actual).to.equal(expected);
          });
          it("should maintain spaces throughout", () => {
            let expected = "3251131343 2543241341";
            let actual = polybius("Hello world");
            expect(actual).to.equal(expected);
          });
          it("should return a string", () => {
            let actual = polybius("thinkful");
            expect(actual).to.be.a("string");
          });
          it("reminds you that PUNK ROCK IS NOT DEAD", () => {
            let actual = "Punk Rock Is Not Dead";
            let expected = "Punk Rock Is Not Dead";
            expect(actual).to.eql(expected);});
          it("should translate the letters i and j to 42 when encoding", () => {
            let expected = "4242";
            let actual = polybius("ij");
            expect(actual).to.equal(expected);
          });
          it("should translate  42 to (i/j) when decoding", () => {
            let expected = "(i/j)";
            let actual = polybius("42", false);
            expect(actual).to.equal(expected);
          });
          it("should remind you TO WATCH HITCHHIKERS GUIDE TO THE GALAXY IF YOU HAVEN'T ALREADY!", () => {
            let actual = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            let expected = "You are lovely, and if you are not you can be lovely. But either way, you Are LOVED!";
            expect(actual).to.eql(expected);});
          it("should ignore capital letters when encoding", () => {
            let testA = polybius("Hello world");
            let testB = polybius("hELLo woRLd");
            expect(testA).to.equal(testB);
          });
        });