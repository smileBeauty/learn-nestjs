import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async findAllUser() {
    return await this.userService.findAll();
  }

  @Post('/page')
  async findUserPage() {
    return await this.userService.findUserPage();
  }
}
