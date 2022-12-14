import { readFileSync } from 'fs'
import * as jwt from 'jsonwebtoken'
import ErrorHandler from './ErrorHandler'

const secret = readFileSync('jwt.evaluation.key', 'utf8')

export function create (payload: string | object) {
  return jwt.sign(payload, secret, {
    algorithm: 'HS256'
  })
}

export function verify (token: string | undefined) {
  if (!token) throw new ErrorHandler('Token not found', 401)
  jwt.verify(token, secret, (err, decoded) => {
    if (err) throw new ErrorHandler('Expired or invalid token', 401)
  })
}
