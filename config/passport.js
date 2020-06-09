//PASSPORT JWT Strategy

var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require("../models/user");
var config = require("../config/database");
module.exports = function(passport){

    var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //fromHeader(header_name) can be used for "Email Verification Authentication"
/* Other options for ExtractJwt: 
   Can be also be done using: fromUrlQueryParameter(param_name) 
                              fromAuthHeaderWithScheme(auth_scheme)
                              fromExtractors([array of extractor functions])
                              fromHeader(header_name)
*/
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
            
        }
    });
}));

}
