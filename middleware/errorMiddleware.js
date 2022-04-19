const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack
    })
}

const asyncHandler = func => (req, res, next) =>
Promise.resolve(func(req, res, next)).catch(next);

module.exports = { errorHandler, asyncHandler}