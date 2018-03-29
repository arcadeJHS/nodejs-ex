import { HttpCode, Get, Controller } from '@nestjs/common';

@Controller('pagecount')
export class ReadinessController {
  @HttpCode(200)
  @Get()
  root(): object {
    return { pageCount: 1 };
  }
};
 