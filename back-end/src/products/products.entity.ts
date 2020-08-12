import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { UserProductRating } from 'src/link-enitities/rating.entity';

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

  @Column({ default: 0 })
  rating: number;

  // relationship used for Rating table
  @OneToMany(
    type => UserProductRating,
    userProductRating => userProductRating.product,
  )
  @JoinTable()
  userProductRating: UserProductRating[];
}
