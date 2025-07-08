import { ApiProperty } from '@nestjs/swagger';
import z from 'zod';

export const classZodSchema = z.object({
  name: z.string().min(3, { message: 'at least 3 characters need' }),
  description: z.string(),
  organizationId: z.string().uuid(),
});

export class CreateClassDto {
  @ApiProperty({ example: 'Turme' })
  name: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: 'organization Id' })
  organizationId: string;
}
