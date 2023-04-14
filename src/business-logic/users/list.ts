import { User } from "../../types/user";
import { UserSchema } from "../../types/user/user-schema";

export const getAllUser = async (): Promise<User[]> => {
    const users = await UserSchema.find();
    console.log(users)
    return users;
}