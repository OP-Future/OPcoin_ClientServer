import { Injectable } from '@nestjs/common';

/*返回体请遵循 code|msg|data 格式*/
const RESTful = (code: number | string, msg: string | object, data: any) => {
  return { code, msg, data };
};

@Injectable()
export class AppService {
  /*网络请求返回*/
  getHello(data: string): object {
    return RESTful(200, '成功', data);
  }
}
