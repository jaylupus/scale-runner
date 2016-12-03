import Pattern from "../pattern.js";
const expect = require('chai').expect;

describe('Pattern', function() {
    describe('pattern', function() {
        it('is a function', function() {
            expect(Pattern).to.be.a('function');
        });

        let myPattern = Pattern(4);

        let arr1 = [],
            arr2 = [],
            i = 0;

        for (var j of myPattern) {
            if (i < 4) {
                arr1.push(j);
                i++;
            }
            else if (i < 8) {
                arr2.push(j);
                i++;
            }
            else{
            	break;
            }
        }

        it('shuffles a range of integers', function(){
        	expect(arr1.slice(0).sort()).to.deep.equal([0,1,2,3]);
        });

        it('repeats a pattern incrementally', function(){
        	expect(arr1.map(x => x + 1)).to.deep.equal(arr2);
        });

    });
});