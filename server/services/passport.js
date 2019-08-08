
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function (email, password, done){
    // verify username and password, call done with user if correct 
    // otherwise call done with false
    User.findOne({email: email}, function(err, user){
        if (err) return done(err);
        
        if (!user){
            return done(null, false);
        }

        // if email is not confirmed, login not possible
        // if (!user.confirmed){
        //     return done(null, false);
        // }
        
        //compare password : is password equal to user.password
        user.comparePassword(password, function(err, isMatch){
            if (err) {return done(err)};
            
            if (!isMatch) return done(null, false);

            return done(null, user);
        })
    })

});


//setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secretString
};


//create JWT stratefy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    //see if user id and payload exists in DB
    User.findById(payload.sub, function(err, user){
        if (err) return done(err, false);

        if (user){
            return done( null, user);
        }else{
            return done(null, false);
        }
    })
});


//tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);