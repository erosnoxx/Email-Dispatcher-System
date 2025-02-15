import { PrismaClient } from '@prisma/client';
import prisma from './prisma.Client';


class UserRepository {
  async createUser(data: { name: string; email: string; passwordHash: string }) {
    const user = await prisma.user.create({
      data
    });
    return user;
  }

  async getUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id }
    });
  }

  async updateUser(id: string, data: { name?: string; email?: string }) {
    return await prisma.user.update({
      where: { id },
      data
    });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id }
    });
  }
}

export default new UserRepository();
