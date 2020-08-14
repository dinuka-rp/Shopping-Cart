export interface IOrder {
  // id: string;      // id is autoincremented
  subTotal: number;
  discount?: number;
  delivery?: number;
  otherCharges?: number;
  otherChargesForPaymentMethod?: number;
  totalAmount: number;
  cartDetails: ICartItem[];
}

export interface ICartItem {
  // product - (image + rating)
  id: string;
  title: string;
  price: number;

  quantity: number;
}
