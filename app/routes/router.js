/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

const AppController = require('../controller/appController');
const appController = new AppController();

router.get('/:id', function (req, res) {
    appController.findUrlById(req, res);
});

router.post('/register.json', function (req, res) {
    appController.addUrl(req, res);
});

router.get('/:id/stats', function (req, res) {
    appController.getStats(req, res);
});


module.exports = router;