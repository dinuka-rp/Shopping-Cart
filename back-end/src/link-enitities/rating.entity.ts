import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  Index,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';

@Entity()
@Index(['productId', 'userId'], { unique: true })
export class UserProductRating extends BaseEntity {
  // combined Primary key
  @PrimaryColumn()
  public productId: string;

  @PrimaryColumn()
  public userId: string;

  @Column()
  public rating: number;

  @ManyToOne(
    type => User,
    user => user.userProductRating,
  )
  public user: User;

  @ManyToOne(
    type => Product,
    product => product.userProductRating,
  )
  public product: Product;
}
