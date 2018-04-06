import { HttpCode, Get, Controller } from '@nestjs/common';
import { ROUTE_USERS } from './routes';

type User = {
  id: number;
  name: string;
};

let users: User[] = [
  {id: 1, name: 'Jack x'},
  {id: 2, name: 'John x'},
  {id: 3, name: 'Lara x'},
  {id: 4, name: 'KJ x'},
  {id: 5, name: 'J. Bouregard'}
];

@Controller(ROUTE_USERS)
export class UsersController {
  @HttpCode(200)
  @Get()
  root(): User[] {
    return users;
  }
};
