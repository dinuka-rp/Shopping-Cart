import { ICartItem } from '../interfaces/order.interface';

export class OrderDto {
  // id: string;      // id is autoincremented
  subTotal: number;
  discount?: number;
  delivery?: number;
  otherCharges?: number;
  otherChargesForPaymentMethod?: number;
  totalAmount: number;
  cartDetails: ICartItem[];
}
