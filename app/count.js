exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        const result = [start];
        let num = start;

        const counter = () => {
            num++;
            result.push(num);
        };

        const timer = setInterval(counter(), 100);

        if ((num = end)) {
            clearInterval(timer);
        }

        console.log(result);
    }
};
