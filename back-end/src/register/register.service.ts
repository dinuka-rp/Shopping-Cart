import { Injectable } from '@nestjs/common';
import { IRegisterUser } from './interface/register.interface';
import { getConnection, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class RegisterService {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  async registerUser(newUser: IRegisterUser): Promise<any> {
    // if(user ===)
    if (!newUser.username || !newUser.email) {
      // undefined/ null
      return 'Username & Email have to be provided.';
    } else if (await this.usersService.checkIfExists(newUser.username)) {
      return 'This username has already been taken. Please choose another username.';
    } else {
      const user: any = await this.usersService.addNewUser(newUser);

      // need to pass the newly created user to get the id, to generate jwt
      return this.authService.login(user); // return jwt
    }
  }
}
