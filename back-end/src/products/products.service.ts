import { Injectable } from '@nestjs/common';
import { Product, CreateProduct } from './interfaces/Product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      itemId: 1,
      image: 'http://placehold.it/32x32',
      title: 'Zanilla',
      price: 2580.1,
      rating: 5,
    },
    {
      itemId: 2,
      image: 'http://placehold.it/32x32',
      title: 'Xoggle',
      price: 1197.3,
      rating: 3,
    },
    {
      itemId: 3,
      image: 'http://placehold.it/32x32',
      title: 'Zaphire',
      price: 3591.57,
      rating: 1,
    },
    {
      itemId: 4,
      image: 'http://placehold.it/32x32',
      title: 'Prowaste',
      price: 3581.3,
      rating: 1,
    },
    {
      itemId: 5,
      image: 'http://placehold.it/32x32',
      title: 'Marvane',
      price: 2628.82,
      rating: 1,
    },
    {
      itemId: 6,
      image: 'http://placehold.it/32x32',
      title: 'Cofine',
      price: 2580.86,
      rating: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(itemId: number): Product {
    console.log(itemId);
    // let product: Product = this.products?.find((item: Product) => {
    //   item.itemId === itemId;
    // });
    // console.log(product);
    return this.products?.find((item: Product) => {
      item.itemId === itemId;
    });
  }

  deleteProductById(id: number): string {
    return `The #${id}nd product was deleted from the database`;
  }

  // this needs to be tested ---- >>>
  updateProduct(id: number, updatedProduct: Product) {
    let productIndex: number = this.products?.findIndex((item: Product) => {
      item.itemId === id;
    });

    this.products[productIndex] = updatedProduct;
  }

  // this needs to be tested ---- >>>
  storeProduct(product: CreateProduct) {
    const newProductId = this.products[this.products.length - 1].itemId;

    const newProduct: Product = {
      ...product,
      itemId: newProductId + 1,
      rating: 0,
    };

    this.products.push(newProduct);
  }

  rateProduct(itemId: number, rate: number, userId: string) {

  }
}
