exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        const stringify = num.toString(2);

        if (stringify.length < 8) {
            return "0" + stringify;
        }

        return stringify;
    },

    multiply: function (a, b) {
        return parseFloat((a * b).toFixed(8));
    }
};
