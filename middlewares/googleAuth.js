const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");
const bcrypt = require("bcrypt");
const { LOCAL_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const User = require("../models/users");
const { nanoid } = require("nanoid");
const googleParams = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${LOCAL_URL}/api/auth/google/redirect`,
  passReqToCallback: true,
};
const gooleCallback = async (req, accessToken, refreshToken, profile, done) => {
  try {
    const { email, displayName } = profile;
    const user = await User.findOne({ email });
    if (user) {
      return done(null, user);
    }
    const password = bcrypt.hash(nanoid(), 10);
    const newUser = await User.create({ email, password, name: displayName });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};
const googleStrategy = new Strategy(googleParams, gooleCallback);
passport.use("google", googleStrategy);
module.exports = passport;
