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

    makeClosures: function (arr, fn) {},

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments: function (a, b = 0, c = 0, d = 0) {
        return a + b + c + d;
    },

    callIt: function (fn) {},

    partialUsingArguments: function (fn) {
        const argv = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            const more_argv = argv.concat(
                Array.prototype.slice.call(arguments)
            );
            return fn.apply(null, more_argv);
        };
    },

    curryIt: function (fn) {}
};
