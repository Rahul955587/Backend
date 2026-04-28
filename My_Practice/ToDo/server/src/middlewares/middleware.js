export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(5000).json({
        message: err.message || "server Error"
    });
};
