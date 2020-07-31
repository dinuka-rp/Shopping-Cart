// product in store
export interface Product {
  itemId: number;               // change this to number in frontend --------- >>>>>>>>
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