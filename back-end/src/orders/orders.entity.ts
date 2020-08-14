import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ICartItem } from './interfaces/order.interface';
import { User } from 'src/users/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'double' })
  subTotal: number;
  
  @Column({ type: 'double', nullable: true })
  discount: number;

  @Column({ type: 'double', nullable: true })
  delivery: number;

  @Column({ type: 'double', nullable: true })
  otherCharges: number;

  @Column({ type: 'double', nullable: true })
  otherChargesForPaymentMethod: number;

  @Column('double')
  totalAmount: number;

  @Column({ type: 'json' })
  cartDetails: ICartItem[];

  // order-user relationship
  @ManyToMany(type => User)
  @JoinTable()
  users: User[];
}
