import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  // can save as blob, if required
  image: string;

  @Column()
  title: string;

  @Column('double')
  price: number;

  @Column({ nullable: true })
  availableQuantity: number;

  @Column({ nullable: true })
  purchasedQuantity: number;

  @Column({ default: 0 })
  rating: number;
}
