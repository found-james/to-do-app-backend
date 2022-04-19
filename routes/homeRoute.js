
function homePage (req, res, next) {
    res.send("<h1>REST api</h1>");
    next();
    return;
}

module.exports = homePage;
