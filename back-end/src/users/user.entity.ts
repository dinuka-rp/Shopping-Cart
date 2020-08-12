import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { UserProductRating } from 'src/link-enitities/rating.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 10, nullable: true })
  mobileNum: string;

  // relationship used for Rating table

  @OneToMany(
    type => UserProductRating,
    userProductRating => userProductRating.user,
  )
  @JoinTable()
  userProductRating: UserProductRating[];
}
