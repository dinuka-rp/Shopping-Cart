import { IProduct } from "src/products/interfaces/Product.interface";

export class OrderDto {
    id: string;
    discount?: number;
    delivery?: number;
    totalPrice: number;
    cartDetails: IProduct[];
  }
  