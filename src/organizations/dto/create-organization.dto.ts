import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({ example: 'Organization Name' })
  name: string;

  @ApiProperty({ example: 'UserId' })
  userId: string;
}
