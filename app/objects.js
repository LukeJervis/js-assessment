exports = typeof window === "undefined" ? global : window;

exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        return fn.apply(obj);
    },

    alterObjects: function (constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
        const arr = [];
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push(`${prop}: ${obj[prop]}`);
            }
        }
        return arr;
    }
};
