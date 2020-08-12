import {
  Controller,
  Param,
  Get,
  Delete,
  Post,
  Put,
  Body,
  UseGuards,
  Request
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Product } from './products.entity';
import { RateProductDto } from './dto/rate-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param() params): Promise<Product> {
    return this.productsService.getProductById(params.id);
  }

  @Delete(':id')
  deleteProductById(@Param() params): Promise<string> {
    return this.productsService.deleteProductById(params.id);
  }

  // body should contain a product
  @Put(':id')
  async updateProduct(
    // This action updates the #${id}nd product
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<string> {
    return this.productsService.updateProduct(id, updateProductDto);
  }

  @Post()
  async storeProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<string> {
    // id and rating won't be sent from the frontend
    return this.productsService.storeProduct(createProductDto);
  }

  // rate product
  @UseGuards(JwtAuthGuard)
  @Post(':id/rate/:rate')
  rateProduct(
    @Param('id') itemId: string,
    @Param('rate') rate: number,
    @Request() req:any,
  ): Promise<string> {
    // get userId from token
    const userId:string = req.user.userId;

    const rating: RateProductDto = {
      productId: itemId,
      userId: userId,
      rating: rate,
    };

    return this.productsService.rateProduct(rating);
  }

  // Patch/ Put to alter given rating by user
}
