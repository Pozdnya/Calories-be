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
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: false })
  passwordHash: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ type: 'enum', enum: AppLanguageEnum, default: AppLanguageEnum.UA })
  appLanguage: AppLanguageEnum;

  @Column({ nullable: true })
  aboutMe: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ type: 'enum', enum: GenderEnum, default: GenderEnum.OTHER })
  gender: GenderEnum;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => CategoryEntity, (category) => category.user, {
    onDelete: 'CASCADE',
  })
  categories: CategoryEntity[];
}
