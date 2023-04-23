import { User } from "../../types/user"
import {v4 as UUID} from 'uuid';
import bcrypt from 'bcrypt';
import { UserSchema } from "../../types/user/user-schema";

type PartialUser = Partial<User>
export const userSignup = async (data: PartialUser): Promise<PartialUser> => {
    const uuid = UUID();
    const password = bcrypt.hashSync(data.password, 10);
    
    let user = await UserSchema.insert({...data, uuid, password});
    console.log({user})
    user.raw();

    return user.raw;
}