import { Get, Controller } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

let users: User[] = [
  {id: 1, name: 'Jack'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Lara'}
];

@Controller('pagecount')
export class AppController {
  @Get()
  root(): User[] {
    return users;
  }
};
 