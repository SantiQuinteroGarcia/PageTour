const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    nombre: { type:String, required:true},
    descripcion: { type:String, required:true},
   
    
});