import { RowBetween } from '../Defaults';
import { Task, TaskX } from '@styled-icons/boxicons-regular';
import TaskOverviewContent from './TaskOverviewContent';

export default function TaskOverview({ completed, inProgress }) {
  return (
    <RowBetween>
      <TaskOverviewContent
        amount={completed}
        label="Completadas"
        Icon={() => <Task size={30} />}
      />
      <TaskOverviewContent
        amount={inProgress}
        label="Em Progresso"
        Icon={() => <TaskX size={30} />}
      />
    </RowBetween>
  );
}
