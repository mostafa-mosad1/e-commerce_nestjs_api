import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductController } from './product.controller.js';
import { Product } from './entities/product.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
