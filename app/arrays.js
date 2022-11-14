exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        const result = arr.indexOf(item);
        return result;
    },

    sum: function (arr) {
        var result = arr.reduce((i, j) => i + j);
        return result;
    },

    remove: function (arr, item) {
        const result = arr.filter((el) => el !== item);
        return result;
    },

    removeWithoutCopy: function (arr, item) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, i + 1);
            }
        }
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        return arr.filter((num) => num === item).length;
    },

    duplicates: function (arr) {
        const seenTimes = new Map();

        return arr.filter((num) => {
            seenTimes.set(num, (seenTimes.get(num) ?? 0) + 1);
            return seenTimes.get(num) === 2;
        });
    },

    square: function (arr) {
        return arr.map((num) => num ** 2);
    },

    findAllOccurrences: function (arr, target) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(i);
            }
        }

        return result;
    }
};
