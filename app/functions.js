exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn(...arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        return function (str2) {
            return str + ", " + str2;
        };
    },

    makeClosures: function (arr, fn) {
        return arr.map((el) => () => fn(el));
    },

    partial: function (fn, str1, str2) {
        return fn.bind(this, str1, str2);
    },

    useArguments: function (...args) {
        return args.reduce((i, j) => i + j);
    },

    callIt: function (fn) {
        let arr = [...arguments];
        arr.shift();
        return fn(...arr);
    },

    partialUsingArguments: function (fn, ...args) {
        return function (...more_args) {
            return fn.apply(null, args.concat(more_args));
        };
    },

    // Discuss with Alex about this one
    curryIt: function (fn, ...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return (arg) => {
            return this.curryIt(fn, ...args, arg);
        };
    }
};
