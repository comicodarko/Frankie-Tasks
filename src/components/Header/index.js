import { useEffect, useState } from 'react';
import { TaskListSquareAdd } from '@styled-icons/fluentui-system-filled';

import { HeaderWrapper } from './styled';
import { Button } from '../Defaults';
import NewTask from './NewTask';

export default function Header({ label }) {
  const [showNewTask, setShowNewTask] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', event => {
      event.key === 'Escape' && setShowNewTask(false);
    });
  }, []);

  return (
    <HeaderWrapper>
      <h1>{label}</h1>
      {showNewTask ? (
        <NewTask setShowNewTask={setShowNewTask} />
      ) : (
          <Button className="animationRight" onClick={() => setShowNewTask(true)}>
            <TaskListSquareAdd size={25} /> Nova Task
          </Button>
      )}
    </HeaderWrapper>
  );
}
