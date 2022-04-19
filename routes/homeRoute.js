const api = require("./todoRoutes");

api.get("/", function homePage (req, res) {
    return res.send("<h1>REST api</h1>");
});

