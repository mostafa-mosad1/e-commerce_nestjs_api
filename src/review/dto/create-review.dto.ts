import { IsInt, IsNotEmpty, IsOptional, Length, Max, Min } from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty()
    @Length(1, 500)
    comment: string;
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(5)
    rating?: number;
}
