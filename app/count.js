exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        let time = start;
        let stop = false;

        const ticker = () => {
            if (time <= end && !stop) {
                console.log(time);
                time++;
                setTimeout(ticker, 100);
            }
        };

        ticker();

        return {
            cancel: () => {
                stop = !stop;
            }
        };
    }
};
