import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // place order
//   @Post()
//   async placeOrder(@Body() createOrderDto: CreateOrderDto) {
//     return this.ordersService.placeOrder(createOrderDto);
//   }
}
