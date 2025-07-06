import { ApiProperty } from '@nestjs/swagger';

export class CreateStudantDto {
  @ApiProperty({ example: '202309702321' })
  tuition: number;

  @ApiProperty({ example: 'Silas' })
  name: string;

  @ApiProperty({ example: 'silasmaques@outlook.com' })
  email: string;
}
