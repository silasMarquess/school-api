import { Injectable } from '@nestjs/common';
import { CreateStudantDto } from './dto/create-studant.dto';
import { Studant } from './entities/studant.entity';

@Injectable()
export class StudantService {
  create(createStudantDto: CreateStudantDto) {}

  findAll() {}

  findOne(id: number) {}
}
