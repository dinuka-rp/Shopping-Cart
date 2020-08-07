import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from 'src/products/interfaces/Product.interface';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'double', nullable: true })
  discount: number;

  @Column({ type: 'double', nullable: true })
  delivery: number;

  @Column('double')
  totalPrice: number;

  @Column({ type: 'json' })
  cartDetails: IProduct[];
}
