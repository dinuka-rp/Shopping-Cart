export class UpdateProductDto {
    itemId: string;               // change this to number in frontend --------- >>>>>>>>
    image?: string | undefined;
    title: string;
    price: number;
    rating?: number;
  }
  