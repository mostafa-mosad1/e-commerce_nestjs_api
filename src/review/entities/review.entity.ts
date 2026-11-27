import { IsInt, IsOptional, Max, Min } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import type { Relation } from "typeorm";
import { User } from "../../user/entities/user.entity.js";
import { Product } from "../../product/entities/product.entity.js";

@Entity({name: "reviews"})
export class Review {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    comment: string;
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(5)
    @Column({type: "int", default: 0, nullable: false, comment: "Rating of the review, from 0 to 5"})
    rating?: number;
    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    update_at: Date;
    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    @ManyToOne(() => User, (user) => user.reviews)
    user: Relation<User>;
    @ManyToOne(() => Product, (product) => product.reviews)
    product: Relation<Product>;
}
