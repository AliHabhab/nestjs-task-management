import { Module } from '@nestjs/common';
import { TasksModule } from './Modules/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      //additional
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
