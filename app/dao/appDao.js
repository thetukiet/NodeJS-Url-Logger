
const Url = require('../model/url');
const AccessInfo = require("../model/accessInfo");
const DaoBase = require('./base/daoBase');


class AppDao {

    constructor() {
        this.base = new DaoBase();
    }


    findUrlById(id) {
        let sqlRequest = "SELECT id, value FROM url WHERE id=$id";
        let sqlParams = {$id: id};
        return this.base.find(sqlRequest, sqlParams).then(rows =>
            new Url(rows[0].id, rows[0].value));
    };


    getUrlStats(urlId) {
        let sqlRequest = "SELECT hourlyTime AS at, COUNT(id) AS visit FROM access_info " +
            "WHERE urlId=$urlId " +
            "GROUP BY hourlyTime " +
            "ORDER BY hourlyTime";
        let sqlParams = {$urlId: urlId};
        return this.base.find(sqlRequest, sqlParams).then(rows => {
            let stats = [];
            for (const row of rows) {
                let accessInfo = {"at":row.at, "visit": row.visit};
                stats.push(accessInfo);
            }
            return stats;
        });
    };


    addUrl(url) {
        let sqlRequest = "INSERT into url (id, value) " +
            "VALUES ($id, $value)";
        let sqlParams = {
            $id: url.id,
            $value: url.value
        };

        // Assume posting url is access. Just for test stats stuff
        this.addAccessInfo(url.id);
        return this.base.run(sqlRequest, sqlParams);
    };

    addAccessInfo(urlId) {
        let sqlRequest = "INSERT into access_info (urlId, accessTime, hourlyTime) " +
            "VALUES ($urlId, $accessTime, $hourlyTime)";
        let accessInfo = new AccessInfo(urlId);
        let sqlParams = {
            $urlId: urlId,
            $accessTime: accessInfo.accessTime,
            $hourlyTime: accessInfo.getHourlyAccessTime()
        };
        return this.base.run(sqlRequest, sqlParams);
    };
}

module.exports = AppDao;