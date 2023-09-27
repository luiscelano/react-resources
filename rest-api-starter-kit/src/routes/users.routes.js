import express from 'express'
import * as UserControllers from 'controllers/users.controller'

const Router = express.Router()

Router.get('/', UserControllers.getUsers)
Router.post('/', UserControllers.createUser)
Router.post('/signin', UserControllers.userSignIn)
Router.delete('/signout', UserControllers.userSignOut)
Router.post('/getAccessToken', UserControllers.getAccessToken)

export default Router
