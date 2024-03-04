const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
passport.use(new LocalStrategy({
 usernameField: 'email'
},
(username, password, done) => {
 User.findOne({ email: username }, (err, user) => {
 if (err) { return done(err); }
 if (!user) {
 return done(null, false, {
 message: 'Incorrect username.'
 });
 }
 if (!user.validPassword(password)) {
 return done(null, false, {
 message: 'Incorrect password.'
 });
 }
 return done(null, user);
 });
}
));
user.setPassword(req.body.password);
user.save((err) => {
 if (err) {
 res
 .status(400)
 .json(err);
 } else {
 const token = user.generateJwt();
 res
 .status(200)
 .json({token});
 }
})};
const login = (req, res) => {
if (!req.body.email || !req.body.password) {
 return res
 .status(400)
 .json({"message": "All fields required"});
}
passport.authenticate('local', (err, user, info) => {
 if (err) {
 return res
 .status(404)
 .json(err);
 }
 if (user) {
 const token = user.generateJwt();
 res
 .status(200)
 .json({token});
 } else {
 res
 .status(401)
 .json(info);
 }
})(req, res);
};
module.exports = {
register,
login
};