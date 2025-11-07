import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class DeleteUserDto {
  @ApiProperty({ example: true, description: 'User deletion status' })
  @IsBoolean()
  isDeleted: boolean;

  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber()
  deletedId: number;

  @ApiProperty({
    example: 'User deleted',
    description: 'User deletion message',
  })
  @IsString()
  message: string;

  constructor(deleteDto: DeleteUserDto) {
    this.isDeleted = deleteDto.isDeleted;
    this.deletedId = deleteDto.deletedId;
    this.message = deleteDto.message;
  }
}
