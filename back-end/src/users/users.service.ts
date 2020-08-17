import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, OneToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { IRegisterUser } from 'src/register/interface/register.interface';

// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        // query using username
        username,
      },
    });
  }

  async checkIfExists(usernameToBeVerified: string): Promise<boolean> {
    if (
      (await this.usersRepository.count({ username: usernameToBeVerified })) > 0
    ) {
      return true;
    }
    return false;
  }

  async addNewUser(newUser: IRegisterUser): Promise<User> {
    await this.usersRepository.insert(newUser);
    return this.findOne(newUser.username);      // the created user will be returned
  }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }

  // -----------------------------------------------------

  // private readonly users: User[];

  // constructor() {
  //   this.users = [
  //     {
  //       userId: 1,
  //       username: 'john',
  //       password: 'changeme',
  //     },
  //     {
  //       userId: 2,
  //       username: 'chris',
  //       password: 'secret',
  //     },
  //     {
  //       userId: 3,
  //       username: 'maria',
  //       password: 'guess',
  //     },
  //   ];
  // }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }
}
