import { User } from "../../types/user";
import { UserSchema } from "../../types/user/user-schema"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserSignin extends User {
    token: string;
} 
export const userSignin = async (email: string, phone: string, password): Promise<UserSignin | Error> => {
    let user: User = null;
    if(email){
        user = await UserSchema.findOneBy({email});
    }
    if(phone){
        user = await UserSchema.findOneBy({phone});
    }

    if(!user){return Error("Usuario no existe o esta inactivo")}

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        return new Error("Contrasena o correo incorrecto");
    }

    const token = jwt.sign({uuid: user.uuid}, process.env.JWT_SIGNIN_KEY, {});
    return {token, ...user};
}