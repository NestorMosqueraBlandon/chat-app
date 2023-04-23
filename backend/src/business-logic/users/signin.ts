import { User } from "../../types/user";
import { UserSchema } from "../../types/user/user-schema"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userSignin = async (id: string, name: string, password): Promise<any | Error> => {
    const users = [];
    const user = {id, name};
    users.push(user);
    return users;
}