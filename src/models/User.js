const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type:String, required:true},
    lastName: { type:String, required:true},
    email: { type:String, required:true},
    password: { type:String, required:true},
    confirmPassword: { type:String, required:true},
    tipoDocumento: { type:String, required:true},
    numDocumento: { type:Number, required:true},
    telefono: { type:Number, required:true},
    departamento: { type:String, required:true},
    ciudad: { type:String, required:true}
});

/* UserSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}; */

module.exports = moongose.model('User', UserSchema);