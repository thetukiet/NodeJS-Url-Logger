class AccessInfo {
    constructor(urlId) {
        this.accessTime = new Date();
        this.urlId = urlId;
    }

    getHourlyAccessTime() {
        let hourlyTime = new Date(this.accessTime);
        hourlyTime.setMinutes(0);
        hourlyTime.setSeconds(0);
        hourlyTime.setMilliseconds(0);
        return hourlyTime.toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');
    }
}

module.exports = AccessInfo;