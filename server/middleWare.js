const jwt = require('jsonwebtoken')

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = decodeToken(authorization.substring(7))
        if (request.token)
            request.isAdmin = true
    } else {
        request.token = null
    }
    next()
}

const decodeToken = (token) => {
    try {
        if (token)
            return jwt.verify(token, process.env.TOKEN_KEY)
        else
            return undefined
    } catch (err) {
        return undefined
    }
}

module.exports = {
    tokenExtractor
}