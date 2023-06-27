import express from 'express'
import { getDb } from '../data/database.js'

const router = express.Router()
const db = getDb()

// GET
router.get('/', async (req, res) => {
    await db.read()
    res.send(db.data.drknks)
})

// POST
router.post('/', async (req, res) => {
    await db.read()
    const cocktail = db.data.drknks
    const generateId = Math.round(Math.random() * 100000)
  
    const addCocktail = {
      id: generateId,
      name: req.body.name,
      image: req.body.image,
      ingredient: req.body.ingredient,
      rating: req.body.rating,
      amount: req.body.amount
    }
  
    cocktail.push(addCocktail)
    await db.write()
    res.send({ id: addCocktail.id })
  })

///DELETE
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id) || id < 0) {
        res.sendStatus(400)
        return
    }
    await db.read()
    const index = db.data.drknks.findIndex(cocktail => cocktail.id === id)
    if (index === -1) {
        res.sendStatus(404)
        return
    }

    db.data.drknks.splice(index, 1)
    await db.write()

    res.sendStatus(200)
})

// PUT
router.put('/:id', async (req, res) => {
    const id = Number(req.params.id)
  
    await db.read()
    const cocktails = db.data.drknks
  
    for (let i = 0; i < cocktails.length; i++) {
      const cocktail = cocktails[i]
      if (cocktail.id === id) {
        const updatedCocktail = req.body
        updatedCocktail.id = id
        cocktails[i] = updatedCocktail
        await db.write()
        res.sendStatus(200)
        return
      }
    }
  
    res.sendStatus(404)
  })
  


export default router