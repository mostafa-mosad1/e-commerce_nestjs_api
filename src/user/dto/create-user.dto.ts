import { IsNotEmpty, Length } from "class-validator";
import { user_role } from "../../utils/user_role.js";

export class CreateUserDto {
    @Length(5, 50)
    name: string;
    @Length(5, 50)
    username: string;
    @Length(5, 100)
    @IsNotEmpty()
    email: string;
    @Length(8, 100)
    @IsNotEmpty()
    password: string;
    role: user_role;
    isverified: boolean;

    // @Column()
    // reviews: Review[];
    // @Column()
    // products: Product[];
}

