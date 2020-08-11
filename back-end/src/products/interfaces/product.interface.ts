// product in store
export interface IProduct {
  itemId: string;
  image?: string | undefined;
  title: string;
  price: number;
  rating?: number;
}

// create product
export interface CreateProduct {
  image?: string | undefined;
  title: string;
  price: number;
}