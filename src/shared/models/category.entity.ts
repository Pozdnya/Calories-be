import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique identificatior' })
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ example: '2023-01-01', description: 'User creation date' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({ example: '2023-01-01', description: 'User update date' })
  updatedAt: Date;

  @Column()
  @ApiProperty({ example: 'Vegetables', description: 'Category name' })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({ example: 1, description: 'User id' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
