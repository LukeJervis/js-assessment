exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
    containsNumber: function (str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter: function (str) {
        return /([a-z])\1/i.test(str);
    },

    endsWithVowel: function (str) {
        return /\b[^aeiouAEIOU\s][a-zA-Z]*[aeiouAEIOU]\b/.test(str);
    },

    captureThreeNumbers: function (str) {
        if (/\d\d\d/.test(str)) {
            return str.match(/\d\d\d/).toString();
        }
        return false;
    },

    matchesPattern: function (str) {
        return /^\d\d\d\-\d\d\d\-\d\d\d\d$/.test(str);
    },

    isUSD: function (str) {
        return /^\$(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$/gm.test(str);
    }
};
