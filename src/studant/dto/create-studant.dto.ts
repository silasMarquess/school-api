import { ApiProperty } from '@nestjs/swagger';
import z from 'zod';

export const studantCreateSchema = z.object({
  classId: z.string().uuid({ message: 'invalid uuid' }),
  firstname: z.string().min(3, { message: 'at least 3 characters need' }),
  surname: z.string().min(3, { message: 'at least 3 characters need' }),
  email: z.string().email({ message: 'invalid email' }),
});

export const studentUpdateSchema = z.object({
  classId: z.string().uuid({ message: 'invalid uuid' }),
  firstname: z.string().min(3, { message: 'at least 3 characters need' }),
  surname: z.string().min(3, { message: 'at least 3 characters need' }),
  email: z.string().email({ message: 'invalid email' }),
});

export class CreateStudantDto {
  @ApiProperty()
  classId: string;

  @ApiProperty({ example: 'Silas' })
  firstname: string;

  @ApiProperty({ example: 'marques' })
  surname: string;

  @ApiProperty({ example: 'silasmaques@outlook.com' })
  email: string;
}
