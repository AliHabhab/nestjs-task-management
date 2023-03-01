import { Module } from '@nestjs/common';
import { TasksRepository } from 'src/DataAccess/tasks.repository';
import { TasksController } from '../Api/tasks.controller';
import { TasksService } from '../Services/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
