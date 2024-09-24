import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  const address = await app.getUrl();
  const logger = new Logger(bootstrap.name, { timestamp: true });
  logger.log(`server on ${address}`);
}
bootstrap();
