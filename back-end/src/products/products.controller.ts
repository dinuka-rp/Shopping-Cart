import {
  Controller,
  Param,
  Get,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/Product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} product`;
  }

  @Delete(':id')
  deleteProductById(@Param() params): string {
    console.log(params.id);
    return `This action deletes the #${params.id}nd product`;
  }

  @Put(':id')
  updateProduct(@Param() params): string {
    console.log(params.id);
    return `This action updates the #${params.id}nd product`;
  }

  @Post()
  async storeProduct(@Body() createProductDto: CreateProductDto) {
    // will this dto work? id and rating won't be sent from the frontend?
    // use only the required stuff from createProductDto in the service as well?
    return this.productsService.storeProduct(createProductDto);
  }

  // rate product
  // body should contain {userId, productId, user_rating}+ jwt Auth headers
  //   @Post()
}
