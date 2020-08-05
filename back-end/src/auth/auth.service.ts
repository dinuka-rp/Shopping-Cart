import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    // can use bcrypt to hash the password and compare -->>
    if (user && user.password === pass) {
      const { password, ...result } = user;

      // returning the user data without the password, if the authentication is successful
      return result;
    }
    return null;
  }
}
