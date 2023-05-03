import { Controller, Get } from '@nestjs/common';
import { TacosService } from './tacos.service';

@Controller('tacos')
export class TacosController {
  constructor(private readonly tacosService: TacosService) {}

  @Get()
  async getTacos(): Promise<string> {
    return await this.tacosService.getTacos();
  }
}
