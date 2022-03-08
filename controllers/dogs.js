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

function update(req, res) {
  Dog.findById(req.params.id)
  .then(dog => {
    if (dog.owner.equals(req.user.profile._id)) {
      req.body.lost = !!req.body.lost
      dog.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/dogs/${dog._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}

function flipLost(req, res) {
  Dog.findById(req.params.id)
  .then(dog => {
    dog.lost = !dog.lost
    dog.save()
    .then(() => {
      res.redirect(`/dogs/${dog._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/dogs")
  })
}

function deleteDog(req, res) {
  Dog.findById(req.params.id)
  .then(dog => {
    if (dog.owner.equals(req.user.profile._id)) {
      dog.delete()
      .then(() => {
        res.redirect('/dogs')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dogs')
  })
}

function createComment(req, res) {
  Dog.findById(req.params.id, function(err, dog) {
    dog.comments.push(req.body)
    dog.save(function(err) {
      res.redirect(`/dogs/${dog._id}`)
    })
  })
}

export {
  index,
  newDogs as new,
  create,
  show,
  edit,
  update,
  flipLost,
  deleteDog as delete,
  createComment
}