import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudantModule } from './studant/studant.module';

@Module({
  imports: [StudantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
