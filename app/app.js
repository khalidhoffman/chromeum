const moment = require('moment');

const Clock = Vue.component('clock', {
    template: require('./views/clock.html'),
    data: function () {
        return {
            startTime: moment().hour(9).minute(0).seconds(0).milliseconds(0),
            endTime: moment().hour(18).minute(0).seconds(0).milliseconds(0),
            currentTime: moment(),
            timeFormat: 'h:mm:ssa',
            dateFormat: 'ddd MMM Do YYYY',
            timeDateFormat: 'ddd h:mm:ssa MMM Do YYYY',
            updateInterval: 1 * 1000
        };
    },
    methods: {
        elapsed: function () {
            if (this.currentTime.isBefore(this.startTime)) {
                return 0;
            }
            return this.currentTime.diff(this.startTime)
        },
        total: function () {
            return this.endTime.diff(this.startTime);
        },
        percentage: function () {
            let percentage = 100 * this.elapsed() / this.total();

            if (percentage > 100) {
                percentage = 100;
            }

            return `${percentage.toFixed(0)}%`
        },
        time: function () {
            return this.currentTime.format(this.timeFormat)
        }
    },
    created: function () {
        setInterval(() => {
            this.currentTime = moment();
        }, this.updateInterval)
    }
});

const app = new Vue({
    el: '#app',
    template: require('./views/app.html')
});
