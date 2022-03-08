import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/dogs
router.get('/', dogsCtrl.index)
// GET - localhost:3000/dogs/new
router.get('/new', dogsCtrl.new)
// GET - localhost:3000/dogs/:id
router.get('/:id', dogsCtrl.show)
// GET - localhost:3000/dogs/:id/edit
router.get("/:id/edit", isLoggedIn, dogsCtrl.edit)

// POST - localhost:3000/dogs
router.post('/', dogsCtrl.create)
// POST - localhost:3000/dogs/:id/comments
router.post('/:id/comments', isLoggedIn ,dogsCtrl.createComment)

// PUT - localhost:3000/taco/:id
router.put('/:id', isLoggedIn, dogsCtrl.update)

// PATCH - localhost:3000/dogs/:id/flip-lost
router.patch("/:id/flip-lost", isLoggedIn, dogsCtrl.flipLost)

// DELETE - localhost:3000/dogs/:id
router.delete('/:id', isLoggedIn, dogsCtrl.delete)

export {
  router
}