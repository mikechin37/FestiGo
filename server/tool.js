
module.exports = {
    getDays: function getDateDays(year, month, date) {
        let yearDay = (year - 2000) * 365
        let monthDay = (month - 1) * 30
        let dateDay = date * 1;
        return yearDay + monthDay + dateDay;
    },
}