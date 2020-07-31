export class UpdateProductDto {
    itemId: number;               // change this to number in frontend --------- >>>>>>>>
    image?: string | undefined;
    title: string;
    price: number;
    rating?: number;
  }
  