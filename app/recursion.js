exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        let files = [];

        const filter = (dir) => {
            if (dirName === undefined) {
                return true;
            } else {
                return dir === dirName;
            }
        };

        const tbd = (file) => {
            if (typeof file === "string" && filter(data.dir)) {
                files.push(file);
            } else if (typeof file === "object") {
                files.concat(
                    exports.recursionAnswers.listFiles(
                        file,
                        filter(data.dir) ? undefined : dirName
                    )
                );
            }
        };

        data.files.forEach((file) => tbd(file));

        return files;
    },

    permute: function (arr) {
        let result = [];

        const grandMaster = (arr2) => {
            if (arr2.length === arr.length) {
                return result.push(arr2);
            }
            for (let i = 0; i < arr.length; i++) {
                if (!arr2.includes(arr[i])) {
                    grandMaster([...arr2, arr[i]]);
                }
            }
        };

        grandMaster([]);

        return result;
    },

    fibonacci: function (n) {
        const damnMath = (num) => {
            if (num < 2) {
                return num;
            }

            return damnMath(num - 1) + damnMath(num - 2);
        };

        return damnMath(n);
    },

    validParentheses: function (n) {}
};
