import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/model/entity/user.entity';
import { Profile } from 'src/model/entity/profile.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([User, Profile]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
