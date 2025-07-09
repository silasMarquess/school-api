import { Test, TestingModule } from '@nestjs/testing';
import { StudantController } from './studant.controller';
import { StudantService } from '../prisma/studant.service';

describe('StudantController', () => {
  let controller: StudantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudantController],
      providers: [StudantService],
    }).compile();

    controller = module.get<StudantController>(StudantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
