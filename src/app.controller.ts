import { HttpCode, Get, Controller } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

let users: User[] = [
  {id: 1, name: 'Jack x1'},
  {id: 2, name: 'John x2'},
  {id: 3, name: 'Lara x3'}
];

@Controller('api/users')
export class AppController {
  @HttpCode(200)
  @Get()
  root(): User[] {
    return users;
  }
};
