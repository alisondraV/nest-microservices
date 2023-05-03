import { Module } from '@nestjs/common';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';

@Module({
  imports: [],
  controllers: [TacosController],
  providers: [TacosService],
  exports: [TacosService],
})
export class TacosModule {}
