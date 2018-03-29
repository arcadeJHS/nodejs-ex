import { HttpCode, Get, Controller } from '@nestjs/common';

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
  @HttpCode(200)
  @Get()
  /*
  root(): User[] {
    return users;
  }
  */
  root(): any {
    return { pageCount: -1 };
  }
};
 