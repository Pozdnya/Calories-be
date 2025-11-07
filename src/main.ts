import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3000;
  console.log('process.env.PORT', process.env.PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    console.log(`Server started on  http://localhost:${PORT}`),
  );
}
bootstrap().catch(console.error);
