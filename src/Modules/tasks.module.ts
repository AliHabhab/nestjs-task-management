import { Module } from '@nestjs/common';
import { TasksController } from '../Api/tasks.controller';
import { TasksService } from '../Services/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
