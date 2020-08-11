export class IOrder {
  // id: string;      // id is autoincremented
  discount?: number;
  delivery?: number;
  totalPrice: number;
  cartDetails: ICartItem[];
}

export class ICartItem {
  // product - (image + rating)
  itemId: string;
  title: string;
  price: number;

  quantity: number;
}
