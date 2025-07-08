import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import PrismaService from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.create({
      data: {
        ...createUserDto,
      },
    });
    return user;
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
    return userUpdate;
  }

  async delete(id: string) {
    const userDeleted = await this.prismaService.user.delete({
      where: {
        id,
      },
    });
    return userDeleted;
  }
}
