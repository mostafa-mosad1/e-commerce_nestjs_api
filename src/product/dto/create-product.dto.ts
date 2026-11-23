import { IsNotEmpty, IsNumber, IsOptional, Length } from "class-validator";

export class CreateProductDto {
    @Length(3, 30)
    @IsNotEmpty()
    title: string;
    @Length(10, 200)
    @IsOptional()
    description?: string;
    @IsNumber()
    price: number;
}
