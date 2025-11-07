import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '123456', description: 'User password' })
  @IsString({ message: 'Password must be a string' })
  @Length(6, 32, { message: 'Password must be between 6 and 32 characters' })
  passwordHash: string;

  @ApiProperty({ example: 'V0bG6@example.com', description: 'User email' })
  @IsString()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
}
