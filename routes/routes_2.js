var passport = require("passport");
var jwt = require('jsonwebtoken');
var User = require("../models/user");
var config = require("../config/database");
var mailing = require("../models/mail");

var auth_token;

module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render("home");
    });
    app.get("/signup", function(req,res){
        res.render("register");
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
                res.redirect('/login');
            }
        });
    });

    app.get("/login", function(req,res){
        res.render("login");
    });

    app.post('/login', function(req, res){

        var email = req.body.email;
        var password = req.body.password;
        
        User.getUserByEmail(email, function(err, user){
        
            if(err) throw err;
            if(!user){
                res.render("failure");
     
            }
    
            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){    
                    var token = jwt.sign({user}, config.secret, {expiresIn: 600000});
                    token_bearer = 'localhost:3000/verify/' + token;
                    auth_token = token;
                    mailing.mailing(email, token_bearer);
                    res.render("email_success");
                }else{
                    res.render("failure");
                }
            });
        });
    });
    app.get('/verify/:token', function(req,res){
        if(req.params.token === auth_token){
            res.render("secrets");
        }
        else{
            res.render("failure");
        }
    });

    
    app.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next){
       
        res.json({message: 'Welcome here.It is protected area and you cant enter here without JWT TOKEN.'});
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })
}
