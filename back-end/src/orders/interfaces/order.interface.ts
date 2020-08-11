import { IProduct } from 'src/products/interfaces/Product.interface';

export class IOrder {
  id: string;
  discount?: number;
  delivery?: number;
  totalPrice: number;
  cartDetails: IProduct[];
}
