import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
