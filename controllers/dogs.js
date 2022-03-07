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

function newDogs(req, res) {
  res.render('dogs/new', {
    title: 'Add Dog'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.lost = !!req.body.lost
  Dog.create(req.body)
  .then(dog => {
    res.redirect('/dogs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}

function show(req, res) {
  Dog.findById(req.params.id)
  .populate('owner')
  .then(dog => {
    console.log(dog)
    res.render('dogs/show', {
      dog,
      title: "Dog view" //use name of dog
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}

function edit(req, res) {
  Dog.findById(req.params.id)
  .then(dog => {
    res.render('dogs/edit', {
      dog,
      title: 'edit dog'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}

export {
  index,
  newDogs as new,
  create,
  show,
  edit
}