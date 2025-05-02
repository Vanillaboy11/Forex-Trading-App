/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    console.log('Usando el asistente para buscar todos los usuarios...');
    const users = await this.usersRepository.find();
    console.log('Usuarios encontrados:', users);
    return users;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    console.log(`Buscando usuario con email: ${email}`);
    const user = await this.usersRepository.findOneBy({ email: email });
    console.log('Usuario encontrado:', user);
    return user;
  }

  async createUser(email: string, passwordHash: string, nombre?: string): Promise<User> {
    console.log(`Creando usuario con email: ${email}`);
    const newUser = this.usersRepository.create({ email, passwordHash, nombre });
    const savedUser = await this.usersRepository.save(newUser);
    console.log('Usuario guardado:', savedUser);
    return savedUser;
  }

}