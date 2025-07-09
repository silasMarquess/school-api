import { Test, TestingModule } from '@nestjs/testing';
import { StudantService } from '../prisma/studant.service';

describe('StudantService', () => {
  let service: StudantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudantService],
    }).compile();

    service = module.get<StudantService>(StudantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
