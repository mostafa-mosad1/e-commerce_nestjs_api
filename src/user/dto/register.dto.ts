import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class RegisterUserDto {
    @Length(5, 50)
    @IsOptional()
    name?: string;
    @Length(5, 50)
    @IsNotEmpty()
    username: string;
    @Length(5, 100)
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @Length(8, 100)
    @IsNotEmpty()
    password: string;
}

