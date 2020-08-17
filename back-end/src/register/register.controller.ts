import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/register.dto';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async registerUser(@Body() registerUserDto: RegisterUserDto): Promise<any> {
    return this.registerService.registerUser(registerUserDto); // return authentication token
  }
}
