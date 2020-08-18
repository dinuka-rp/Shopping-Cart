import { Injectable } from '@nestjs/common';
import {
  IProduct,
  CreateProduct,
  IRateProduct,
} from './interfaces/Product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Product } from './products.entity';
import { UserProductRating } from 'src/link-enitities/rating.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,

    @InjectRepository(UserProductRating)
    private ratingRepository: Repository<UserProductRating>,
  ) {}

  getProducts(page = 1): Promise<Product[]> {
    return this.productsRepository.find({ take: 2, skip: 2 * (page - 1) });
  }

  getProductById(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async deleteProductById(id: string): Promise<string> {
    await this.productsRepository.delete(id);
    return `The #${id}nd product was deleted from the database`;
  }

  async updateProduct(id: string, updatedProduct: IProduct): Promise<string> {
    await this.productsRepository.update(id, updatedProduct);
    return `The #${id}nd product was updated in the database`;
  }

  async storeProduct(product: CreateProduct): Promise<string> {
    await this.productsRepository.insert(product);
    return `The new product was added to the database`;
  }

  async rateProduct(rating: IRateProduct): Promise<string> {
    // add record to rating entity
    await this.ratingRepository.insert(rating);

    // update rating from product side by querying the link table ---
    const { avg } = await getConnection()
      .getRepository(UserProductRating)
      .createQueryBuilder('userRating')
      .select('AVG(userRating.rating)', 'avg')
      .where('userRating.productId = :id', { id: rating.productId })
      .getRawOne();

    // this.productsRepository.update()
    await getConnection()
      .createQueryBuilder()
      .update(Product)
      .set({ rating: Math.round(avg) })
      .where('id = :id', { id: rating.productId })
      .execute();

    return `${rating.rating} was given as the rating to product:${rating.productId} by user:${rating.userId}`;
  }

  // get rating previously given by user for the same product
  async getUserRateProduct(primaryKey: {
    productId: string;
    userId: string;
  }): Promise<number> {
    const userProductRating = await this.ratingRepository.findOne(primaryKey);
    // console.log(userProductRating);
    if (userProductRating) {
      // if the user has rated this product before (if not, will be undefined)
      return userProductRating.rating;
    } else {
      return 0;
    }
  }

  async alterRateProduct(rating: IRateProduct): Promise<string> {
    const primaryKey = { productId: rating.productId, userId: rating.userId };

    await this.ratingRepository.update(primaryKey, rating);

    // update rating from product side by querying the link table ---
    const { avg } = await getConnection()
      .getRepository(UserProductRating)
      .createQueryBuilder('userRating')
      .select('AVG(userRating.rating)', 'avg')
      .where('userRating.productId = :id', { id: rating.productId })
      .getRawOne();

    // this.productsRepository.update()
    await getConnection()
      .createQueryBuilder()
      .update(Product)
      .set({ rating: Math.round(avg) })
      .where('id = :id', { id: rating.productId })
      .execute();

    return `${rating.rating} was given as the updated rating to product:${rating.productId} by user:${rating.userId}`;
  }

  // -----------------------------------------------------

  // private products: IProduct[] = [
  //   {
  //     itemId: '1',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Zanilla',
  //     price: 2580.1,
  //     rating: 5,
  //   },
  //   {
  //     itemId: '2',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Xoggle',
  //     price: 1197.3,
  //     rating: 3,
  //   },
  //   {
  //     itemId: '3',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Zaphire',
  //     price: 3591.57,
  //     rating: 1,
  //   },
  //   {
  //     itemId: '4',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Prowaste',
  //     price: 3581.3,
  //     rating: 1,
  //   },
  //   {
  //     itemId: '5',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Marvane',
  //     price: 2628.82,
  //     rating: 1,
  //   },
  //   {
  //     itemId: '6',
  //     image: 'http://placehold.it/32x32',
  //     title: 'Cofine',
  //     price: 2580.86,
  //     rating: 1,
  //   },
  // ];

  // getProducts(): IProduct[] {
  //   return this.products;
  // }

  // getProductById(id: string): IProduct {
  //   return this.products?.find((item: IProduct) => {
  //     return item.itemId === id;
  //   });
  // }

  // deleteProductById(id: string): string {
  //   const productToBeDeleted = this.products?.find((item: IProduct) => {
  //     return item.itemId === id;
  //   });
  //   this.products = this.products?.filter((item: IProduct) => {
  //     return item !== productToBeDeleted;
  //   });

  //   return `The #${id}nd product was deleted from the database`;
  // }

  // updateProduct(id: string, updatedProduct: IProduct): string {
  //   let productIndex: number = this.products?.findIndex((item: IProduct) => {
  //     return item.itemId === id;
  //   });

  //   this.products[productIndex] = updatedProduct;
  //   return `The #${id}nd product was updated in the database`;
  // }

  // storeProduct(product: CreateProduct): string {
  //   const lastProductId = this.products[this.products.length - 1].itemId;
  //   const newItemId = parseInt(lastProductId) + 1;

  //   const newProduct: IProduct = {
  //     ...product,
  //     itemId: newItemId.toString(),
  //     rating: 0,
  //   };

  //   this.products.push(newProduct);
  //   return `The new product was added to the database`;
  // }

  // rateProduct(itemId: number, rate: number, userId: string) {}
}
