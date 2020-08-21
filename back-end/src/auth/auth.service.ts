import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { IRefresh } from 'src/app/interface/refresh.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.getToken(payload),
      refresh_token: await this.getRefreshToken(payload),
    };
  }

  async regenerateTokens(refresh: IRefresh): Promise<any> {
    const options = { secret: jwtConstants.refreshSecret };

    // console.log(this.jwtService.decode(refresh.refreshToken));      // this gives an internal server error (status:500 if the signature is wrong)

    if (await this.jwtService.verify(refresh.refreshToken, options)) {
      // if the refreshToken is valid,

      const oldSignedPayload: any = this.jwtService.decode(
        refresh.refreshToken,
      );
      const newUnsignedPayload = {
        sub: oldSignedPayload.sub, // id is recorded as sub
        username: oldSignedPayload.username,
      };

      return {
        access_token: await this.getToken(newUnsignedPayload),
        refresh_token: await this.getRefreshToken(newUnsignedPayload),
      };
    }
  }

  async getToken(payload: any): Promise<any> {
    // generate jwt token
    return this.jwtService.sign(payload);
  }

  async getRefreshToken(payload: any): Promise<any> {
    // generate refresh token
    const options = { secret: jwtConstants.refreshSecret, expiresIn: '30d' };
    return this.jwtService.sign(payload, options);
  }

  // reference: https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
}
