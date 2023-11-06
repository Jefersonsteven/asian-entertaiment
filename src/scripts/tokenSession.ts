const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const header = {
  alg: "HS256",
  typ: "JWT",
}

export function createTokenSession(data: any) {
  const expires = Date.now() + 1000 * 60 * 60 * 24

  const exp = new Date(expires).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })
  
  const payload = {
    id: "1234567890",
    data,
    date_expires: exp, 
    expires: expires
  }

  const token = jwt.sign(payload, secret, { expiresIn: '24h' })

  return token
}

export function verifyTokenSession(token: string) {
  const decoded = jwt.verify(token, secret)
 
  return decoded
}