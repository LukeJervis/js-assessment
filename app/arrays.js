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
        for (i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        }
        return arr1;
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        let count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function (arr) {
        const sortArray = arr.sort();
        let dupeNums = [];
        for (let i = 0; i < arr.length; i++) {
            if (
                sortArray[i] === sortArray[i + 1] &&
                !dupeNums.includes(sortArray[i])
            ) {
                dupeNums.push(sortArray[i]);
            }
        }
        return dupeNums;
    },

    square: function (arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] ** 2);
        }
        return result;
    },

    findAllOccurrences: function (arr, target) {
        const hits = arr.filter((n) => n === 1).length;
        let targetIndex = 0;
        let result = [];

        for (let i = 0; i < hits; i++) {
            let hit = arr.indexOf(target, targetIndex);
            targetIndex = hit + 1;
            result.push(hit);
        }
        return result;
    }
};
