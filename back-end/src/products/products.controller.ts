import { Controller, Param, Get, Delete, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): string {
    return 'All Products';
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
  storeProduct(): string {
    return `This action stores a new product`;
  }
}
