import bcrypt, { compareSync } from "bcrypt"

const saltRound = 10;

export const hassPass = (password) => {
    const salt = bcrypt.genSaltSync(saltRound)
    //return hashed password
    return bcrypt.hashSync(password,salt)
}

export const comparePass = (plain ,hashed)=>{
    //return boolean
    return compareSync(plain ,hashed)
}