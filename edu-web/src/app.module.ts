/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnnouncementsModule } from './announcements/announcements.module';
import { ConfigModule } from '@nestjs/config';
import { QuizzesModule } from './quizzes/quizzes.module';

@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true, // This makes env available everywhere
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AnnouncementsModule,
    QuizzesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
