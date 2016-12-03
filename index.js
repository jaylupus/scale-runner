var teoria = require('teoria');
var _ = require('lodash');

if (!teoria.note.random) {
    teoria.note.random = function() {
        return this.fromKey(_.sample(_.range(12)));
    }
}

if (!teoria.Note.random) {
    teoria.Note.random = function() {
        return this.fromKey(_.sample(_.range(12)));
    }
}

function getRandomScaleName() {
    return _.sample(teoria.Scale.KNOWN_SCALES);
};

// function getRandomScale() {
//     return getRandomNote().scale(getRandomScaleName());
// };

if (!teoria.Scale.prototype.extendedGet) {
    teoria.Scale.prototype.extendedGet = function(i) {
        let len = this.scale.length + 1;
        if (i <= 0) {
            return this.get(i % len + len).interval(teoria.Interval([Math.floor(i / len), 0]));
        } else if (i >= len) {
            return this.get(i % len).interval(teoria.Interval([Math.floor(i / len), 0]));
        } else {
            return this.get(i);
        }
    };
}

export default teoria;