import { Injectable } from '@nestjs/common';
import { CreateStudantDto } from './dto/create-studant.dto';
import PrismaService from 'src/prisma.service';
import { UpdateStudantDto } from './dto/update-studant.dto';

@Injectable()
export class StudantService {
  constructor(private prismaService: PrismaService) {}

  async create(createStudantDto: CreateStudantDto) {
    const student = await this.prismaService.student.create({
      data: {
        ...createStudantDto,
      },
    });
    return student;
  }

  async findAll() {
    const studants = await this.prismaService.student.findMany();
    return studants;
  }

  async findOne(id: string) {
    const student = await this.prismaService.student.findUnique({
      where: {
        id,
      },
    });
    console.log(student);
    return student;
  }

  async update(id: string, updateStudantDto: UpdateStudantDto) {
    const studantExist = await this.prismaService.student.findUnique({
      where: {
        id,
      },
    });
    if (!studantExist) {
      throw new Error('Student not found');
    }
    const studant = await this.prismaService.student.update({
      where: {
        id,
      },
      data: {
        ...updateStudantDto,
      },
    });
    return studant;
  }

  async delete(id: string) {
    const student = await this.prismaService.student.delete({
      where: {
        id,
      },
    });
    return student;
  }
}
