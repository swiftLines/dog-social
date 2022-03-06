import { Dog } from "../models/dog.js"

function index(req, res) {
  Dog.find({})
  .then(dogs => {
    res.render('dogs/index', {
      dogs,
      title: '🐕'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}


export {
  index
}