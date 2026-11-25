import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productDB : Repository<Product>) {}
  create(createProductDto: CreateProductDto) {
    const product = this.productDB.create(createProductDto);
    this.productDB.save(product)
    return "This action adds a new product";
  }

  findAll() {
    return this.productDB.find();
  }

  async findOne(id: number) {
    const product = await this.productDB.findOneBy({ id });
    if (!product) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Product not found',
        error: 'Not Found'
      });
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.productDB.update(id, updateProductDto);
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return this.productDB.delete(id);
  }
}
