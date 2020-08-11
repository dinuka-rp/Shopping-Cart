// product in store
export interface IProduct {
  itemId: string; // to identify items uniquely in DB
  image?: string | undefined;
  title: string;
  price: number;
  rating?: number;
}

// item in cart
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
