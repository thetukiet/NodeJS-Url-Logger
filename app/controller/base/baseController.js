
class BaseController {

    findSuccess(res) {
        return (result) => {
            res.status(301);
            res.json(result);
        }
    }

    statsSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    addSuccess(res) {
        return (result) => {
            res.status(201);
            res.json(result);
        }
    }

    addExisted(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }
}

module.exports = BaseController;