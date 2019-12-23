const BaseController = require('./base/baseController');
const AppDao = require('../dao/appDao');
const Url = require('../model/url');
const shortHash = require('short-hash');

class CarController {

    constructor() {
        this.base = new BaseController();
        this.appDao = new AppDao();
    }

    /**
     * Get URL link by hashed ID
     * @param req
     * @param res
     */
    findUrlById(req, res) {
        let id = req.params.id;
        this.appDao.findUrlById(id)
            .then(this.base.findSuccess(res))
            .catch(this.base.findError(res));
    };


    /**
     * Hashed and add more URL to DB
     * @param req
     * @param res
     */
    addUrl(req, res) {
        // TODO: Need to verify the URL

        let url = new Url();
        url.value = req.query.url;
        url.id = shortHash(url.value);
        let current = this.appDao.findUrlById(url.id);
        if (current.id)
            this.base.addExisted(res);
        else
            return this.appDao.addUrl(url)
                .then(this.base.addSuccess(res))
                .catch(this.base.serverError(res));
    };


    /**
     * Get stats log
     * @param req
     * @param res
     */
    getStats(req, res) {
        let id = req.params.id;
        return this.appDao.getUrlStats(id)
            .then(this.base.addSuccess(res))
            .catch(this.base.serverError(res));
    };

}

module.exports = CarController;