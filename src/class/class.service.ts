import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import PrismaService from 'src/prisma.service';

@Injectable()
export class ClassService {
  constructor(private prismaService: PrismaService) {}

  async create(createClassDto: CreateClassDto) {
    const classCreated = await this.prismaService.class.create({
      data: {
        ...createClassDto,
      },
    });
    return classCreated;
  }

  async findAll() {
    return await this.prismaService.class.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.class.findUnique({
      where: {
        id,
      },
    });
  }

  async findClassByOrganizationId(organizationId: string) {
    const classesByOrganization = await this.prismaService.class.findMany({
      where: {
        organizationId,
      },
    });
    return classesByOrganization;
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    const classUpdated = await this.prismaService.class.update({
      where: {
        id,
      },
      data: {
        ...updateClassDto,
      },
    });
    return classUpdated;
  }

  async remove(id: string) {
    const classDeleted = await this.prismaService.class.delete({
      where: {
        id,
      },
    });
    return classDeleted;
  }
}
