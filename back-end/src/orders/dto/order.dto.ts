import { ICartItem } from '../interfaces/order.interface';

export class OrderDto {
  // id: string;      // id is autoincremented
  discount?: number;
  delivery?: number;
  totalPrice: number;
  cartDetails: ICartItem[];
}
