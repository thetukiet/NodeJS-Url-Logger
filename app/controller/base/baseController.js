
class BaseController {

    findSuccess(res) {
        return (result) => {
            res.status(301);
            res.json({Location: result.value});
        }
    }

    statsSuccess(res) {
        return (data) => {
            res.status(200);
            res.json(data);
        }
    }

    addSuccess(res, data) {
        return () => {
            res.status(201);
            res.json(data);
        }
    }

    addExisted(res, data) {
        return () => {
            res.status(200);
            res.json(data);
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