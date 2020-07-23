import { ICartItem } from "./Product";

// let userName:string = "BadBoi";
// let userCartName:string = `${userName}_cart`;

export interface ICart {
  cartItems: ICartItem[];
  subTotal?: number;
  discount?: number;
  deliveryCharges?: number;
  otherCharges?: number;
  otherChargesForPaymentMethod?: number;
  totalAmount?: number;

  // userId?: string;
  // createdDate: Date;
}
