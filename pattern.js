var _ = require('lodash');

module.exports = function Pattern(num) {
    let i = 0,
        j = 0,
        arr = _.shuffle(_.range(num));
    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (i == num) {
                i = 0;
                j++;
            }
            return { value: arr[i++] + j, done: false };
        }
    };
};