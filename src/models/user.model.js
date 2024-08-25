
import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema  = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    dob:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    // avatar:{
    //     type:String,
    //     required: true
    // },
    password:{
        type:String,
        required: true
    },
    // cPassword:{
    //     type:String,
    //     required: true
    // }
});

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// comparing password 
UserSchema.methods.isPasswordCorrect = async function (pass){

  return  await bcrypt.compare(pass, this.password);

};


export const Funhub = mongoose.model("Funhub", UserSchema);