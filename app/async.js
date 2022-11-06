exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return Promise.resolve(value);
    },

    manipulateRemoteData: async function (url) {
        let data = await fetch(url).then((response) => response.json());

        const arrayOfNames = data.people.map((person) => person.name);

        return arrayOfNames.sort();
    }
};
