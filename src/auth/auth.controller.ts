import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { User, Bookmark } from 'generated/prisma/client';
import { AuthService } from './auth.service';
import { AuthDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    return this.authService.login();
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
