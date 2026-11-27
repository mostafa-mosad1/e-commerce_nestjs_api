import { Review } from '../../review/entities/review.entity.js';
import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { User } from '../../user/entities/user.entity.js';


@Entity({name: 'products'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 255})
  title: string;

  @Column({type: 'text'})
  description: string;

  @Column({type: 'decimal', precision: 10, scale: 2})
  price: number;

  @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
  @ManyToOne(() => User, (user) => user.products)
  user: Relation<User>;
  @OneToMany(() => Review, (review) => review.product)
  reviews: Relation<Review[]>;
}