import { Router } from 'express'
import * as dogsCtrl from "../controllers/dogs.js"

const router = Router()

// GET - localhost:3000/dogs
router.get('/', dogsCtrl.index)
// GET - localhost:3000/dogs/new
router.get('/new', dogsCtrl.new)

export {
  router
}