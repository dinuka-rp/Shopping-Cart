import {
  Controller,
  Param,
  Get,
  Delete,
  Post,
  Put,
  Body,
  UseGuards,
  Request,
  Patch,
  Query,
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

  // get products with pagination -------->>>>>>>>>>>>>>>>>>>

  @Get()
  async getProducts(@Query('page') page: number): Promise<Product[]> {
    return this.productsService.getProducts(page);
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

  // end point to get existing user rating of product (in order for the frontend to know whether to update)
  @UseGuards(JwtAuthGuard)
  @Get(':id/rate')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getUserRateProduct(
    @Param('id') productId: string,
    @Request() req: any,
  ): Promise<number> {
    // get userId from token
    const userId: string = req.user.id;

    const primaryKey: {
      productId: string;
      userId: string;
    } = { productId: productId, userId: userId };

    return this.productsService.getUserRateProduct(primaryKey);
  }

  // rate product
  @UseGuards(JwtAuthGuard)
  @Post(':id/rate/:rate')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  rateProduct(
    @Param('id') productId: string,
    @Param('rate') rate: number,
    @Request() req: any,
  ): Promise<string> {
    // get userId from token
    const userId: string = req.user.id;

    const rating: RateProductDto = {
      productId: productId,
      userId: userId,
      rating: rate,
    };

    return this.productsService.rateProduct(rating);
  }

  // Patch/ Put to alter given rating by user
  @UseGuards(JwtAuthGuard)
  @Patch(':id/rate/:rate')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  alterRateProduct(
    @Param('id') productId: string,
    @Param('rate') rate: number,
    @Request() req: any,
  ): Promise<string> {
    // get userId from token
    const userId: string = req.user.id;

    const rating: RateProductDto = {
      productId: productId,
      userId: userId,
      rating: rate,
    };

    return this.productsService.alterRateProduct(rating);
  }
}
