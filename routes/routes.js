var passport = require("passport");
var jwt = require('jsonwebtoken');
var User = require("../models/user");
var config = require("../config/database");
var mailing = require("../models/mail");

module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.json('Welcome to my Node.js');
    });

    app.post('/signup', function(req,res){
        var newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        User.createUser(newUser, function(err, user){
            if(err){
                res.json({success: false, message: 'user is not registered'});
            }
            else{
                res.json({success: true, message: 'user is registered successfully.'});
            }
        });
    });

    app.post('/login', function(req, res){
        var email = req.body.email;
        var password = req.body.password;
        User.getUserByEmail(email, function(err, user){
            if(err) throw err;
            if(!user){
                return res.json({success: false, message: 'No user found'});
     
            }
    
            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    var token = jwt.sign({user}, config.secret, {expiresIn: 600000});
                    var token_bearer = 'bearer ' + token;
                    mailing.mailing("sohamshah456@gmail.com", token_bearer);
                    res.json({success: true, token: 'bearer ' + token, user:{
                        id: user._id,
                        email: user.email,
                        password: user.password
                    }});
                }else{
                    return res.json({success: false, message: 'Password doesnt match'});
                }
            });
        });
    });

    

    app.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next){
       
        res.json({message: 'Welcome here.It is protected area and you cant enter here without JWT TOKEN.'});
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })
}
