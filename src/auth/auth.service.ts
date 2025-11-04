import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return {
      message: 'I am logged in!!',
    };
  }

  async signup(dto: AuthDto) {
    //Hashing
    const hashedPassword = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hashedPassword,
      },
    });

    //Storing new user
    return user;
  }
}
