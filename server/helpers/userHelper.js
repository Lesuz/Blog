const jwt = require('jsonwebtoken')

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

module.exports = { decodeToken }