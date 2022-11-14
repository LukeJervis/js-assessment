exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        let count = start;
        let timer = null;

        const ticker = () => {
            if (count <= end) {
                console.log(count);
                count++;
                timer = setTimeout(ticker, 100);
            }
        };

        ticker();

        return {
            cancel: () => {
                clearTimeout(timer);
            }
        };
    }
};
