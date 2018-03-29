import { Module } from '@nestjs/common';
import { ReadinessController } from './readiness.controller';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [ReadinessController, AppController],
  components: [],
})
export class AppModule {}
