const passport = require('passport');
const request = require('request');
const moment = require('moment');
const routeFunctions = require('./routeFunctions');
const transporter = require('../config/email');

const User = require('../models/user');

