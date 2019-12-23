
const BaseController = require('./base/baseController');

class CarController {

    constructor() {
        this.base = new BaseController();
    }

    /**
     * Get URL link by hashed ID
     * @param req
     * @param res
     */
    findUrlById(req, res) {
        return this.base.findSuccess(res);
    };


    /**
     * Hashed and add more URL to DB
     * @param req
     * @param res
     */
    addUrl(req, res) {
        return this.base.addSuccess(res);
    };


    /**
     * Get stats log
     * @param req
     * @param res
     */
    getStats(req, res) {
        return this.base.findSuccess(res);
    };

}

module.exports = CarController;