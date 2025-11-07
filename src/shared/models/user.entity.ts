import { ApiProperty } from '@nestjs/swagger';
import { AppLanguageEnum, GenderEnum, RoleEnum } from 'src/types';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique identificatior' })
  id: number;

  @Column()
  @ApiProperty({ example: 'John', description: 'User first name' })
  firstName: string;

  @Column()
  @ApiProperty({ example: 'Doe', description: 'User last name' })
  lastName: string;

  @Column()
  @ApiProperty({ example: '123456', description: 'User password' })
  passwordHash: string;

  @Column()
  @ApiProperty({ example: 'V0bG6@example.com', description: 'User email' })
  email: string;

  @Column({ enum: RoleEnum, default: RoleEnum.USER })
  @ApiProperty({ example: 'user', description: 'User role' })
  role: RoleEnum;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ example: '2023-01-01', description: 'User creation date' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({ example: '2023-01-01', description: 'User update date' })
  updatedAt: Date;

  @Column({ default: false })
  @ApiProperty({ example: true, description: 'User is verified' })
  isVerified: boolean;

  @Column({ enum: AppLanguageEnum, default: AppLanguageEnum.UA })
  @ApiProperty({ example: 'ua', description: 'User language' })
  appLanguage: AppLanguageEnum;

  @Column({ nullable: true })
  @ApiProperty({ example: 'About me', description: 'User about me' })
  aboutMe: string;

  @Column({ nullable: true })
  @ApiProperty({ example: '+380123456789', description: 'User phone' })
  phone: string;

  @Column()
  @ApiProperty({ example: '2023-01-01', description: 'User birth date' })
  birthDate: Date;

  @Column({ default: GenderEnum.OTHER })
  @ApiProperty({ example: 'male', description: 'User gender' })
  gender: GenderEnum;

  @Column({ nullable: true })
  @ApiProperty({
    example: 'my-avatar.jpg',
    description: 'User avatar',
  })
  avatar: string;

  @OneToMany(() => CategoryEntity, (category) => category.user, {
    onDelete: 'CASCADE',
  })
  categories: CategoryEntity[];
}
