class Access {
    constructor(id, urlId, accessTime) {
        this.id = id;
        this.urlId = urlId;
        this.accessTime = accessTime;
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

module.exports = Access;