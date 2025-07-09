import { Injectable } from '@nestjs/common';
import { CreateStudantDto } from '../studant/dto/create-studant.dto';
import PrismaService from 'src/prisma.service';
import { UpdateStudantDto } from '../studant/dto/update-studant.dto';

@Injectable()
export class StudantService {
  constructor(private readonly prismaService: PrismaService) {}

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
    if (!student) {
      throw new Error('Student not found');
    }
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

  async findStudentByClassId(classId: string) {
    const students = await this.prismaService.student.findMany({
      where: {
        classId,
      },
    });
    return students;
  }
}
