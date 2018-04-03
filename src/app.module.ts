import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ReadinessController } from './readiness.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [AppController, ReadinessController, UsersController],
  components: [],
})
export class AppModule {}
