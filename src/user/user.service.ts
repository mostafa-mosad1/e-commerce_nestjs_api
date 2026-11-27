import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register.dto.js';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler.js';

@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User)
     private userDB: Repository<User>
  ) {}

 async createNewUser(registerUserData: RegisterUserDto) {
    if (!registerUserData) {
      throw new BadRequestException('Request body is required');
    }

    const { name, email, password, username } = registerUserData;
   const validNewUser = await this.userDB.findOne({where :{email}})
    if(validNewUser) throw new BadRequestException("email is already in use")
      const salt = bcrypt.genSaltSync(8);
const hash = bcrypt.hashSync(password, salt);
    let newUserData =   this.userDB.create({
  name,
    username,
    email,
    password: hash
    });
    const user =  await this.userDB.save(newUserData);
    return user;
  }

  findAll() {
    return this.userDB.find();
  }

  findOne(id: number) {
    return this.userDB.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
