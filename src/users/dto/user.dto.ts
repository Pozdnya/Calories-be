import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/shared/models/user.entity';
import { AppLanguageEnum, GenderEnum, RoleEnum } from 'src/types';

export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  id: number;

  @ApiProperty({ example: 'John', description: 'User first name' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'User last name' })
  lastName: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'User', description: 'User role' })
  role: RoleEnum;

  @ApiProperty({ example: true, description: 'User verification status' })
  isVerified: boolean;

  @ApiProperty({ example: 'ua', description: 'User language' })
  appLanguage: AppLanguageEnum;

  @ApiProperty({ example: 'About me', description: 'User bio' })
  aboutMe?: string;

  @ApiProperty({ example: '+380123456789', description: 'User phone number' })
  phone?: string;

  @ApiProperty({ example: '1990-01-01', description: 'User birth date' })
  birthDate?: Date;

  @ApiProperty({ example: 'Male', description: 'User gender' })
  gender: GenderEnum;

  @ApiProperty({ example: 'avatar.jpg', description: 'User avatar filename' })
  avatar?: string;

  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'User creation date',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2022-01-01T00:00:00.000Z',
    description: 'User update date',
  })
  updatedAt: Date;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.role = user.role;
    this.isVerified = user.isVerified;
    this.appLanguage = user.appLanguage;
    this.aboutMe = user.aboutMe;
    this.phone = user.phone;
    this.birthDate = user.birthDate;
    this.gender = user.gender;
    this.avatar = user.avatar;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
