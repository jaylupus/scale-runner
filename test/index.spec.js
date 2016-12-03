import teoria from "../";
const expect = require('chai').expect;

describe('Teoria', function() {

    describe('teoria', function() {
        it('is an object', function() {
            expect(teoria).to.be.a('object');
        });
    });

    describe('random note', function(){
        it('returns a note', function(){
            expect(teoria.Note.prototype.isPrototypeOf(teoria.note.random())).to.equal(true);
        });
    });

    let cScale = teoria.note('c4').scale('ionian');

    describe('extendedGet', function() {
        it('gets notes in octave range', function() {
            expect(cScale.extendedGet(5).toString()).to.equal(teoria.note('g4').toString());
        });

        it('gets notes below octave range', function() {
            expect(cScale.extendedGet(-3).toString()).to.equal(teoria.note('g3').toString());
        });

        it('gets notes above octave range', function() {
            expect(cScale.extendedGet(12).toString()).to.equal(teoria.note('f5').toString());
        });

    });

});