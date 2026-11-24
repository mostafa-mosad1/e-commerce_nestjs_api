import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductModule } from './product/product.module.js';
import { Product } from './product/entities/product.entity.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'e-commerce_nestjs_api',
    }),
    ProductModule,
     TypeOrmModule.forRoot({
       type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: '123456',
       database: 'e-commerce_nestjs_api',
      //  entities: [__dirname + '/**/*.entity{.ts,.js}'],
       entities: [Product],
       autoLoadEntities: true,
       synchronize: true,
     })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
