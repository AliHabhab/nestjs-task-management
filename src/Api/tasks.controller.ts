import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  RequestTimeoutException,
} from '@nestjs/common';
import { Task } from 'src/DataAccess/task.entity';
import { CreateTaskDto } from '../Dto/tasks/create-task.dto';
import { GetTasksFilterDto } from '../Dto/tasks/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from '../Dto/tasks/update-task-status.dto';
import { TaskStatus } from '../Models/task-status';
import { TasksService } from '../Services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //   @Get()
  //   getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //     //if we have any filters defined, call tasksService.getTasksWilFilters
  //     //otherwise , just get all tasks
  //     if (Object.keys(filterDto).length) {
  //       return this.tasksService.getTasksWithFilters(filterDto);
  //     } else {
  //       return this.tasksService.getAllTasks();
  //     }
  //   }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  //   @Post()
  //   createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //     return this.tasksService.createTask(createTaskDto);
  //   }

  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     return this.tasksService.deleteTask(id);
  //   }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  //   ): Task {
  //     const { status } = updateTaskStatusDto;
  //     return this.tasksService.updateTaskStatus(id, status);
  //   }
}
