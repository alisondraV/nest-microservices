import { Injectable } from '@nestjs/common';

@Injectable()
export class TacosService {
  getTacos(): string {
    return 'Tacos from the tacos-service!';
  }
}
