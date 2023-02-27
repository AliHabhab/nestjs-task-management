import { IsEnum } from 'class-validator';
import { TaskStatus } from '../../Models/task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
