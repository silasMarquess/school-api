import { Module } from '@nestjs/common';
import { StudantService } from './studant.service';
import { StudantController } from './studant.controller';
import PrismaService from 'src/prisma.service';

@Module({
  controllers: [StudantController],
  providers: [StudantService, PrismaService],
})
export class StudantModule {}
