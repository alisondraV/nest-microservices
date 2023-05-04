import { Controller } from '@nestjs/common';
import { TacosService } from './tacos.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TacosController {
  constructor(private readonly tacosService: TacosService) {}

  @MessagePattern({ cmd: 'getTacos' })
  getTacos(): string {
    return this.tacosService.getTacos();
  }
}
