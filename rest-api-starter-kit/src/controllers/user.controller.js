import bcrypt from 'bcrypt'
import generateAccessToken from 'utils/generateAccessToken'
import generateRefreshToken from 'utils/generateRefreshToken'
import jwt from 'jsonwebtoken'

const users = []
const refreshTokens = []

export const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  console.log('hashedPassword', hashedPassword)
  const user = { username: req.body.username, password: hashedPassword }
  users.push(user)
  delete user.password

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)
  return res.status(200).json({
    message: 'User created!',
    accessToken,
    refreshToken
  })
}

export const getUsers = (__, res) => res.json({ users })

export const userSignIn = async (req, res) => {
  const user = users.find((user) => user.username === req.body.username)

  if (!user) return res.status(404).send('Cannot find user')

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      delete user.password
      const accessToken = generateAccessToken(user)
      const refreshToken = generateRefreshToken(user)
      return res.status(200).json({
        message: 'Signed In!',
        accessToken,
        refreshToken
      })
    }
  } catch {
    res.status(500).send()
  }
}

export const userSignOut = (req, res) => {
  refreshTokens = refreshTokens.filter((refreshToken) => refreshToken !== req.body.refreshToken)

  return res.send('Signed Out!')
}

export const getAccessToken = async (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.status(403).send('Forbidden')

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ username: user.username })
    res.json({ accessToken: accessToken })
  })
}
