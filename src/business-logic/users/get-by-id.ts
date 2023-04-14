import { User } from "../../types/user";
import { UserSchema } from "../../types/user/user-schema"

export const getUserById = async(uuid: string): Promise<User> => {
    const user = await UserSchema.findOneBy({uuid: uuid});
    return user;
}