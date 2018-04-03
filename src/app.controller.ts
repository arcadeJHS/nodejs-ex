import { HttpCode, Get, Res, Controller } from '@nestjs/common';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  root(): string {
    const response = `
      **** ANGULAR 64 BASIC V2 ****\n64K RAM SYSTEM 38911 BASIC BYTES FREE\nREADY.
    `;
    return response;
  }
}
