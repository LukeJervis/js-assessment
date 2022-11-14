exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        let files = [];

        const tbs = () => {
            for (const [key, value] of Object.entries(data)) {
                if (key === "files") {
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === "string") {
                            files.push(value[i]);
                        } else if (typeof value[i] === "object") {
                            files.push(
                                exports.recursionAnswers.listFiles(value[i])
                            );
                        }
                    }
                }
            }
        };

        tbs();
        return files.flat(Infinity);
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
