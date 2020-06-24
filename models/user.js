const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    require: true
  },
  school: {
    type: String,
    require: true
  },
  profilePic: {
    type: String,
    require: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    require: true
  },
  status: {
    type: Number,
    default: 0 // 0 = offline, 1 = busy, 2 = online
  },
  groups: {
    type: String, // stored as json maybe?
    default: JSON.stringify([]) // array of group ids?
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isOnline: {
    type: Boolean,
    default: true
  },
  uid: {
    type: String,
    default: ""
  },
  token: {
    type: String,
    default: ""
  }
});

module.exports = user = mongoose.model('user', userSchema);