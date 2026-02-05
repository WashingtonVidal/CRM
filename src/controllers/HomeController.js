const Homeservice = require("../services/HomeService")


class Homecontroller {
    index(req, res) {
        const result = Homeservice.execute();
        res.send(result);
    }
}

module.exports = new Homecontroller ();