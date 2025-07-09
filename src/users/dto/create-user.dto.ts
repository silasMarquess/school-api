import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const userZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export class CreateUserDto {
  @ApiProperty({ example: 'silas' })
  name: string;
  @ApiProperty({ example: 'silasmaques@outlook.com' })
  email: string;
  @ApiProperty({ example: '12345678' })
  password: string;
}
