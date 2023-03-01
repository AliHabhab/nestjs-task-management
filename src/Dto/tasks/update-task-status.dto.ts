import { IsEnum } from 'class-validator';
import { TaskStatus } from '../../Models/task-status';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
