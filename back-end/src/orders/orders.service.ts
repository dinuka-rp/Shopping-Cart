import { Injectable } from '@nestjs/common';
import { IOrder } from './interfaces/order.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async placeOrder(order: IOrder): Promise<string> {
    // get userId using token(get username from token and get User from that)
    // const user =  User

    // await this.ordersRepository.insert(order);

    // await getConnection()
    //   .createQueryBuilder()
    //   .relation(Order, 'users')
    //   .of(order)
    //   .add(user);

    return `The new order was recorded in the database`;
  }
}
