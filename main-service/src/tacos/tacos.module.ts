import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TacosController } from './tacos.controller';
import { TacosService } from './tacos.service';
import { TACOS_PROVIDER } from '../../providers';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TACOS_PROVIDER,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'tacos_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [TacosController],
  providers: [TacosService],
})
export class TacosModule {}
