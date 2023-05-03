import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TACOS_PROVIDER } from '../../providers';

@Injectable()
export class TacosService {
  constructor(@Inject(TACOS_PROVIDER) private readonly client: ClientProxy) {}

  async getTacos(): Promise<string> {
    const cmd = 'getTacos';
    return cmd;

    try {
      const pattern = { cmd };
      const payload = {};
      return await this.client.send<string>(pattern, payload).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
