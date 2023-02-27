import { Module } from '@nestjs/common';
import { TasksModule } from './Modules/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}
