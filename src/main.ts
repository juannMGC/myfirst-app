import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
    .setTitle('Medieval Script')
    .setDescription('The Medieval AAPI description')
    .setVersion('0.1')
    .build();
  
    const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
