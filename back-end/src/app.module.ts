import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/users/user.entity';
import { Product } from 'src/products/products.entity';
import { Order } from 'src/orders/orders.entity';
import { UserProductRating } from 'src/link-enitities/rating.entity';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    RegisterModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE', 'mysql'),
          host: configService.get('DB_HOST', 'localhost'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [User, Product, Order, UserProductRating],
          synchronize: false,
        } as TypeOrmModuleOptions;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TypeORM config reference: https://github.com/nestjs/nest/issues/530#issuecomment-415690676
// https://github.com/nestjs/nest/issues/1119#issuecomment-459982798
// https://jaketrent.com/post/configure-typeorm-inject-nestjs-config/
