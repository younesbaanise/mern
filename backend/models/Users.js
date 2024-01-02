const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: Number, required: true},
    enrollNumber: { type: Number, required: true},
    admissionDate: { type: Date, default: Date.now}
    // add image
  }
)
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;