import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*配置跨越*/
import Cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*注册跨域组件*/
  app.enableCors(Cors);

  /*监听端口*/
  await app.listen(3000);
}
bootstrap();
