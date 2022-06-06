import { useEffect, useState } from 'react';
import { TaskListSquareAdd } from '@styled-icons/fluentui-system-filled';

import { HeaderWrapper } from './styled';
import { Button } from '../Defaults';
import NewTask from './NewTask';

export default function Header({ label }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', event => {
      event.key === 'Escape' && setShow(false);
    });
  }, []);

  return (
    <HeaderWrapper>
      <h1>{label}</h1>
      {show ? (
        <NewTask />
      ) : (
        <div>
          <Button onClick={() => setShow(true)}>
            <TaskListSquareAdd size={25} /> Nova Task
          </Button>
        </div>
      )}
    </HeaderWrapper>
  );
}
