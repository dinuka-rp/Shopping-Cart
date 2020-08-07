import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // place order
  @UseGuards(JwtAuthGuard)
  @Post()
  async placeOrder(@Body() createOrderDto: OrderDto): Promise<string> {
    return this.ordersService.placeOrder(createOrderDto);
  }
}
