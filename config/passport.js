var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require("../models/user");
var config = require("../config/database");
module.exports = function(passport){

    var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    
    User.getUserById(jwt_payload.user._id, function(err, val) {
        if (err) {
            return done(err, false);
        }
        if (val) {
            return done(null, val);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

}
