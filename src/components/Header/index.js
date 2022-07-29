import { useContext, useState } from 'react';
import { TaskListSquareAdd } from '@styled-icons/fluentui-system-filled';

import { GlobalContext } from '../../Context';
import { HeaderWrapper } from './styled';
import { Button } from '../Defaults';
import NewTask from './NewTask';

export default function Header() {
  const [showNewTask, setShowNewTask] = useState(false);
  const { selectedMenu } = useContext(GlobalContext);

  return (
    <HeaderWrapper>
      <NewTask 
        isVisible={showNewTask}
        setIsVisible={setShowNewTask}
      />
      <h1>{selectedMenu}</h1>
      <Button className="animationRight" onClick={() => setShowNewTask(true)}>
        <TaskListSquareAdd size={25} /> Nova Task
      </Button>
    </HeaderWrapper>
  );
}
