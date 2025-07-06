import { Module } from '@nestjs/common';
import { StudantService } from './studant.service';
import { StudantController } from './studant.controller';

@Module({
  controllers: [StudantController],
  providers: [StudantService],
})
export class StudantModule {}
