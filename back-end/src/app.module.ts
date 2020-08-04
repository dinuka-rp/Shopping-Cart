import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [ProductsModule, OrdersModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}