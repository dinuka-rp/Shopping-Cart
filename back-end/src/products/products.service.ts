import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/Product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  getProducts(): string {
    return 'All Products';
  }

  //   getProductById(): string {
  //     return 'All Products';
  //   }

  //   deleteProductById(): string {
  //     return 'All Products';
  //   }

  //   updateProduct(): string {
  //     return 'All Products';
  //   }

  storeProduct(product: Product) {
    this.products.push(product);
  }
}
