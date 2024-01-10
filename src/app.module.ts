import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users2Module } from './users2/users2.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb://mongodb:mongodb@localhost:27019"),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
