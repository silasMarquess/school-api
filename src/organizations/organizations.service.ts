import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import PrismaService from 'src/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = await this.prismaService.organization.create({
      data: {
        ...createOrganizationDto,
      },
    });
    return organization;
  }

  async findAll() {
    const allOrganizations = await this.prismaService.organization.findMany();
    return allOrganizations;
  }

  async findOne(id: string) {
    const organization = await this.prismaService.organization.findUnique({
      where: {
        id,
      },
    });
    return organization;
  }

  async findOrganizationByUserId(userId: string) {
    const organizationsByUser = await this.prismaService.organization.findMany({
      where: {
        userId,
      },
    });
    return organizationsByUser;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const userUpdate = await this.prismaService.organization.update({
      where: {
        id,
      },
      data: {
        ...updateOrganizationDto,
      },
    });
    return userUpdate;
  }

  async remove(id: string) {
    const userDeleted = await this.prismaService.organization.delete({
      where: {
        id,
      },
    });

    return userDeleted;
  }
}
