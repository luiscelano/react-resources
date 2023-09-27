import express from 'express'
import PostsRoutes from './posts.routes'
import UsersRoutes from './users.routes'

const Router = express.Router()

Router.use('/users', UsersRoutes)
Router.use('/v2/posts', PostsRoutes)

export default Router
