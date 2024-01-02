const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('mongoose')
const UserModel = require("./models/Users")

const app = express()
app.use(cors(
  {
    origin: ["https://test-repo-frontend.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }
))
app.use(express.json())


// connect database
mongoose.connect('mongodb+srv://baaniseyounes:VkQzztRL7RRRszKi@cluster0.biaa8yo.mongodb.net/');




// get method
app.get("/", (req, res) => {
  UserModel.find({})
    .then(data => {
      res.send(data)
      console.log(data)
    })
    .catch(err => res.json(err))
})


// post method
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// update mehtod
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;

  // Validate if id is a valid ObjectId
  if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
  }

  UserModel.findByIdAndUpdate(id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      enrollNumber: req.body.enrollNumber,
      // add image
  }, { new: true })
      .then(updatedUser => {
          if (!updatedUser) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.json(updatedUser);
      })
      .catch(err => {
          console.error("Error updating user:", err);
          res.status(500).json(err);
      });
});

// delete method
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  console.log("Deleting user with ID:", id);
  UserModel.findByIdAndDelete(id)
      .then(deletedUser => {
          if (!deletedUser) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.json({ message: 'User deleted successfully', deletedUser });
      })
      .catch(err => {
          console.error("Error deleting user:", err);
          res.status(500).json(err);
      });
});



app.listen(8000, () => { console.log("server running on port 8000") })
