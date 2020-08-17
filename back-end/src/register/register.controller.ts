import { Controller, Post, Request } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

//   @Post()
//   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//   async registerUser(@Request() req: any): Promise<string> {
//     return this.registerService.registerUser(req.user); // return authentication token
//   }
}
