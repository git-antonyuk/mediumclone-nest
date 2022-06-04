import { Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  @Post('users')
  async createUser(): Promise<any> {
    return new Promise((resolve) => resolve('yo'));
  }
}
