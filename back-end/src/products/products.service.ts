import { Injectable } from '@nestjs/common';
import { Product, CreateProduct } from './interfaces/Product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      itemId: '1',
      image: 'http://placehold.it/32x32',
      title: 'Zanilla',
      price: 2580.1,
      rating: 5,
    },
    {
      itemId: '2',
      image: 'http://placehold.it/32x32',
      title: 'Xoggle',
      price: 1197.3,
      rating: 3,
    },
    {
      itemId: '3',
      image: 'http://placehold.it/32x32',
      title: 'Zaphire',
      price: 3591.57,
      rating: 1,
    },
    {
      itemId: '4',
      image: 'http://placehold.it/32x32',
      title: 'Prowaste',
      price: 3581.3,
      rating: 1,
    },
    {
      itemId: '5',
      image: 'http://placehold.it/32x32',
      title: 'Marvane',
      price: 2628.82,
      rating: 1,
    },
    {
      itemId: '6',
      image: 'http://placehold.it/32x32',
      title: 'Cofine',
      price: 2580.86,
      rating: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    return this.products?.find((item: Product) => {
      return item.itemId === id;
    });
  }

  deleteProductById(id: string): string {
    const productToBeDeleted = this.products?.find((item: Product) => {
      return item.itemId === id;
    });
    this.products = this.products?.filter((item: Product) => {
      return item !== productToBeDeleted;
    });

    return `The #${id}nd product was deleted from the database`;
  }

  updateProduct(id: string, updatedProduct: Product): string {
    let productIndex: number = this.products?.findIndex((item: Product) => {
      return item.itemId === id;
    });

    this.products[productIndex] = updatedProduct;
    return `The #${id}nd product was updated in the database`;
  }

  storeProduct(product: CreateProduct): string {
    const lastProductId = this.products[this.products.length - 1].itemId;
    const newItemId = parseInt(lastProductId) + 1;

    const newProduct: Product = {
      ...product,
      itemId: newItemId.toString(),
      rating: 0,
    };

    this.products.push(newProduct);
    return `The new product was added to the database`;
  }

  rateProduct(itemId: number, rate: number, userId: string) {}
}
