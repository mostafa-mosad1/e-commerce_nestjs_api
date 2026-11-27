import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { RegisterUserDto } from './dto/register.dto.js';

@Controller('user/auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createUserDto: RegisterUserDto) {
    return this.userService.createNewUser(createUserDto);
  }

  @Get('/findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
