const { CustomError } = require('../errors/custom-error')

const errorHandler = (err,req,res,next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(err.status).json({ err: err.message })
}

module.exports = errorHandler