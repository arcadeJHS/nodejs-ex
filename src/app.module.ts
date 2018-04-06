import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ReadinessController } from './controllers/readiness.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ReadinessController, UsersController],
  components: [],
})
export class AppModule {}
