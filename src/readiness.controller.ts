import { HttpCode, Get, Controller } from '@nestjs/common';
import { ROUTE_READINESS } from './routes';

@Controller(ROUTE_READINESS)
export class ReadinessController {
  @HttpCode(200)
  @Get()
  root(): object {
    return { pageCount: 1 };
  }
};
 