import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Documentação API escolar')
    .setDescription('Endpoint da API de consulta de alunos')
    .setVersion('1.0')
    .addTag('Alunos')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory());

  await app.listen((process.env.APPLICATION_PORT as string) || 3000);
}
bootstrap();
