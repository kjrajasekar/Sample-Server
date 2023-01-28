const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  empid: { type: String, required: true, trim: true, unique: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  mobileno: { type: String, required: true, trim: true },
  dept_name: { type: String, default: null },
  designation: { type: String, required: true, trim: true },
  _token: { type: String, default: null },

});

userSchema.pre('save', function (next) {
  next();
});

module.exports = mongoose.model("UserDetails", userSchema);