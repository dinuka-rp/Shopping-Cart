import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // place order
  @UseGuards(JwtAuthGuard)
  @Post()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async placeOrder(
    @Body() createOrderDto: OrderDto,
    @Request() req: any,
  ): Promise<string> {
    // get userId from token
    const userId: string = req.user.id;

    return this.ordersService.placeOrder(createOrderDto, userId);
  }

  // guest - place order
  @Post('guest')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async placeGuestOrder(@Body() createOrderDto: OrderDto): Promise<string> {
    return this.ordersService.placeGuestOrder(createOrderDto);
  }
}
