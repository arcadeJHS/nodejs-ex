import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
