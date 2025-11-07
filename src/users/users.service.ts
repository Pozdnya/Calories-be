import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from 'src/shared/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dto/user.dto';
import { handleError } from 'src/shared/utils/handleError';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.userRepository.create(createUserDto);
      const savedUser = await this.userRepository.save(newUser);
      const userEntity = new User(savedUser);

      return userEntity;
    } catch (error: unknown) {
      handleError(error, 'Cant create user', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find({
        relations: ['categories'],
      });

      return users.map((user) => new User(user));
    } catch (error: unknown) {
      handleError(error, 'Cant find all user', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return new User(user);
    } catch (error: unknown) {
      handleError(error, 'Cant find user by id' + id, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.preload({
        id,
        ...updateUserDto,
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const updated = await this.userRepository.save(user);

      return new User(updated);
    } catch (error: unknown) {
      handleError(error, 'Cant update user by id' + id, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      const deletedUser = await this.userRepository.delete(id);

      if (deletedUser.affected === 0) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return { isDeleted: true, deletedId: id, message: 'User deleted' };
    } catch (error: unknown) {
      handleError(error, 'Cant delete user by id' + id, HttpStatus.NOT_FOUND);
    }
  }
}
