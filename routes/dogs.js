import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"

const router = Router()

// GET - localhost:3000/dogs
router.get('/', dogsCtrl.index)
// GET - localhost:3000/dogs/new
router.get('/new', dogsCtrl.new)
// GET - localhost:3000/dogs/:id
router.get('/:id', dogsCtrl.show)

// POST - localhost:3000/dogs
router.post('/', dogsCtrl.create)

export {
  router
}