import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { AppLanguageEnum, GenderEnum, RoleEnum } from 'src/types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John', description: 'User first name' })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  firstName?: string;

  @ApiProperty({ example: 'Doe', description: 'User last name' })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  lastName?: string;

  @ApiProperty({
    example: 'hashed_password',
    description: 'User password hash',
  })
  @IsOptional()
  @IsString()
  passwordHash?: string;

  @ApiProperty({ example: 'admin', description: 'User role' })
  @IsOptional()
  @IsEnum(RoleEnum, { message: 'Role must be Admin, SuperUser or User' })
  role?: RoleEnum;

  @ApiProperty({ example: true, description: 'User verification status' })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @ApiProperty({ example: 'ua', description: 'User language preference' })
  @IsOptional()
  @IsEnum(AppLanguageEnum, { message: 'Language must be ua or en' })
  appLanguage?: AppLanguageEnum;

  @ApiProperty({ example: 'About me text', description: 'User bio' })
  @IsOptional()
  @IsString()
  aboutMe?: string;

  @ApiProperty({ example: '+380123456789', description: 'User phone number' })
  @IsOptional()
  @IsPhoneNumber('UA', { message: 'Phone must be a valid UA number' })
  phone?: string;

  @ApiProperty({ example: '1990-01-01', description: 'User birth date' })
  @IsOptional()
  @IsDateString({}, { message: 'Birthday must be a valid date string' })
  birthday?: string;

  @ApiProperty({ example: 'Male', description: 'User gender' })
  @IsOptional()
  @IsEnum(GenderEnum, { message: 'Gender must be Male or Female' })
  gender?: GenderEnum;

  @ApiProperty({ example: 'avatar.jpg', description: 'User avatar filename' })
  @IsOptional()
  @IsString()
  avatar?: string;
}
