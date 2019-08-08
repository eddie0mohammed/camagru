
const bccrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
    // username: {
    //     type: String,
    //     unique: true,
    //     lowercase: true,
    //     required: true
    // },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String, 
        required: true

    },
    confirmed: {
        type: Boolean,
        default: false
    }
})

// on Save Hook, encrypt password
userSchema.pre('save', function(next){
    const user = this;

    bccrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bccrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bccrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return callback(err);

        callback(null, isMatch);
    })
}

//create model class
const UserModelClass = mongoose.model('user', userSchema);

//export model class

module.exports = UserModelClass;