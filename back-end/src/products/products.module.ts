import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProductRating } from 'src/link-enitities/rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,UserProductRating])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
