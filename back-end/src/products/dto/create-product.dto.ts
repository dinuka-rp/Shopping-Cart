export class CreateProductDto {
  itemId: string;
  image?: string | undefined;
  title: string;
  price: number;
  rating?: number;
}
