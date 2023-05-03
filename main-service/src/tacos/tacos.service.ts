import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TACOS_PROVIDER } from '../../providers';

@Injectable()
export class TacosService {
  constructor(@Inject(TACOS_PROVIDER) private client: ClientProxy) {}

  async getTacos(): Promise<string> {
    const pattern = { cmd: 'getTacos' };

    try {
      return await this.client.send(pattern, {}).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
