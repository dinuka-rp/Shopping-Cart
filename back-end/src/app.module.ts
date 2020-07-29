import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { ServiceController } from './login/service/service.controller';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, OrdersController, ServiceController, LoginController, RegisterController],
  providers: [AppService, ProductsService, OrdersService, LoginService, RegisterService],
})
export class AppModule {}
