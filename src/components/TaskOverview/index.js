import { Task, TaskX } from '@styled-icons/boxicons-regular';

import { RowBetween } from '../Defaults';
import TaskOverviewContent from './TaskOverviewContent';

export default function TaskOverview({ completed, inProgress }) {
  const all = completed + inProgress;
  return (
    <RowBetween>
      <TaskOverviewContent
        amount={completed}
        all={all}
        label="Completadas"
        Icon={() => <Task size={30} />}
        type="checked"
      />
      <TaskOverviewContent
        amount={inProgress}
        all={all}
        label="A ser feito"
        Icon={() => <TaskX size={30} />}
        type="unchecked"
      />
    </RowBetween>
  );
}
