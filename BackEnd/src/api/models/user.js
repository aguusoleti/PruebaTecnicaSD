import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarID.js";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  token: {
    type: String,
    default: generarId(),
  },
  type: {
    type: String,
    required: true,
    enum:["client","business","admin"]
  },
});

userSchema.methods.comprobarPasswordUsuario = async function(formularioPassword){
  return await bcrypt.compare(formularioPassword, this.password)
}

const User = mongoose.model("User",userSchema)
export default User