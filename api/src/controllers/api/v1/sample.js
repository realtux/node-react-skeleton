class Sample {

    routes = {
        'get /api/v1/sample/get': 'get_message',
    }

    middleware = {}

    async get_message(req, res) {
        return res
            .status(200)
            .send({
                message: 'hello from the backend',
            });
    }

};

export default new Sample;
