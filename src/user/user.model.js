const {Schema,model}=require("mongoose")

const UserSchema=new Schema({
    username:{
        type:String,   
    },
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
role:{
type:String
}
},{timestamps:true});

const UserModel=model("user",UserSchema)
module.exports=UserModel