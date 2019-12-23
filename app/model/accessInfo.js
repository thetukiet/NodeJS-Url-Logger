class AccessInfo {
    constructor(urlId) {
        this.accessTime = new Date();
        this.urlId = urlId;
    }

    getHourlyAccessTime() {
        let hourlyTime = Date.parse(this.accessTime);
        hourlyTime.setMinutes(0);
        hourlyTime.setSeconds(0);
        hourlyTime.setMilliseconds(0);
        return hourlyTime;
    }

    getHourlyAccessTimeString() {

    }
}

module.exports = AccessInfo;