import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import allData from './routes/allData.js'
import restCocktail from './routes/restCocktail.js'

const port = process.env.PORT || 1389
const app = express()

app.use(cors())
app.use('/api', express.json()) 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next()
})

const __dirname = dirname(fileURLToPath(import.meta.url))
const pathToStaticFolder = join(__dirname, '../dist')
app.use(express.static(pathToStaticFolder))

app.use('/api/alldata', allData)
app.use('/api/cocktail', restCocktail)

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})