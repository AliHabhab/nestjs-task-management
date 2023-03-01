import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from 'src/Models/task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
