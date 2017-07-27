const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new mongoose.Schema({

  //Private and organization
  name: String,
  address: String,
  postal_place: String,
  phoneNumber: String,
  postal_code: String,
  role: String,
  created: {
    type: Date,
    default: Date.now()
  },
  active: Boolean,
  loggedIn: [Date],
  crmUser: Schema.Types.ObjectId,

  //Private
  club: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  team: Schema.Types.ObjectId,
  club_ref_person: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  stripe_cus_id: String,

  //Organization
  teams: [{
    name: String
  }],
  contact_person: String,
  bank_token: String,
  pii_token: String,
  stripe_acc_id: String,
  vatRegistered: Boolean,
  members: Number,
  goal: Number,
  requestAccepted: Boolean,
  organizationNumber: String,
  stripe_keys: {
    secret: String,
    publishable: String
  },
  deliveryDates: [{
    type: Schema.Types.ObjectId,
    ref: 'DeliveryDate'
  }],
  message: String,

});

userSchema.plugin(passportLocalMongoose);

userSchema.methods.generateJwt = function () {
  let expire_date = new Date();
  expire_date.setDate(expire_date.getDate() + 1);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    name: this.name,
    role: this.role,
    club: this.club,
    team: this.team,
    club_ref_person: this.club_ref_person,
    active: this.active,
    requestAccepted: this.requestAccepted,
    exp: parseInt(expire_date.getTime() / 1000)
  }, process.env.JWT_SECRET)
};


module.exports = mongoose.model('User', userSchema);
