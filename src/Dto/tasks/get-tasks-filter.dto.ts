import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../../Models/task-status';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}
