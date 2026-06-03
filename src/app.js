import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'

const app = express()

app.use(express.json())

app.use('/usuarios', usuarioRoutes)

export default app