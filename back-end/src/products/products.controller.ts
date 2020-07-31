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
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/Product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param() params): Product {
    // console.log(params.id);
    return this.productsService.getProductById(params.id);
  }

  @Delete(':id')
  deleteProductById(@Param() params): string {
    // This action deletes the #${params.id}nd product
    return this.productsService.deleteProductById(params.id);
  }

  // body should contain a product
  @Put(':id')
  async updateProduct(
    // This action updates the #${id}nd product
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @Post()
  async storeProduct(@Body() createProductDto: CreateProductDto) {
    // id and rating won't be sent from the frontend
    return this.productsService.storeProduct(createProductDto);
  }

  // rate product
  // + jwt Auth headers
  @Post(':id/rate/:rate')
  rateProduct(
    @Param('id') itemId: number,
    @Param('rate') rate: number,
    @Body() userId: string,
  ) {
    return this.productsService.rateProduct(itemId, rate, userId);
  }

  // Patch/ Put to alter given rating by user
}
