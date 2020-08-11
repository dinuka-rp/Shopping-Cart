import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/products.entity';


@Entity()
@Index(["productId", "userId"], { unique: true })
export class UserProductRating {

    // combined Primary key is needed

    @Column()
    public productId!: string;

    @Column()
    public userId!: string;

    @Column()
    public rating!: number;

    @ManyToOne(type => User, user => user.userProductRating)
    public user!: User;

    @ManyToOne(type => Product, product => product.userProductRating)
    public product!: Product;
}