import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import type { Relation } from "typeorm";
import { user_role } from "../../utils/user_role.js";
import { IsEmail } from "class-validator";
import { Product } from "../../product/entities/product.entity.js";
import { Review } from "../../review/entities/review.entity.js";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', nullable: true })
    name?: string | null;
    @Column()
    username: string;
    @Column({unique: true , nullable: false})
    @IsEmail()
    email: string;
    @Column()
    password: string;
    @Column({ type: "enum", enum: user_role , default: user_role.user})
    role: user_role;
    @Column({default: false})
    isverified: boolean;

    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    update_at: Date;
    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    
    @OneToMany(() => Review, (review) => review.user)
    reviews: Relation<Review[]>;

    @OneToMany(() => Product, (product) => product.user)
    products: Relation<Product[]>;
}
