import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity } from 'typeorm';


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
}