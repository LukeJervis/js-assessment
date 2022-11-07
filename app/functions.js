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
        let newArr = [];

        arr.map((el) => {
            newArr.push(() => {
                return fn(el);
            });
        });

        return newArr;
    },

    partial: function (fn, str1, str2) {
        return fn.bind(this, str1, str2);
    },

    useArguments: function () {
        const arr = [...arguments];
        return arr.reduce((i, j) => i + j);
    },

    callIt: function (fn) {
        let arr = [...arguments];
        arr.shift();
        return fn(...arr);
    },

    partialUsingArguments: function (fn) {
        const argv = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            const more_argv = argv.concat(
                Array.prototype.slice.call(arguments)
            );
            return fn.apply(null, more_argv);
        };
    },

    curryIt: function (fn) {
        return (a) => {
            return (b) => {
                return (c) => {
                    return fn(a, b, c);
                };
            };
        };
    }
};
