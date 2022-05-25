import { useContext } from 'react';

import { TodayTasksWrapper } from './styles';
import { RowBetween } from '../Defaults';
import Task from './Task';
import { GlobalContext } from '../../Context';
import More from './More';

import IconCode from '../../assets/category-icons/code.png';
import IconSocial from '../../assets/category-icons/social.png';
import IconStudy from '../../assets/category-icons/study.png';
import IconWork from '../../assets/category-icons/work.png';

export default function TodayTasks() {
  const { tasks, setTasks } = useContext(GlobalContext);
  const icons = {
    Programação: IconCode,
    Social: IconSocial,
    Estudos: IconStudy,
    Trabalho: IconWork
  };

  function toggleTask(taskId) {
    const tasksArray = [...tasks];
    let taskIndex = tasksArray.findIndex(task => task.id === taskId);
    tasksArray[taskIndex].checked = !tasksArray[taskIndex].checked;
    setTasks(tasksArray);
  }

  return (
    <TodayTasksWrapper>
      <RowBetween style={{ paddingRight: 15 }}>
        <h2>Tasks de Hoje</h2>
        <More />
      </RowBetween>
      {tasks.map(task => {
        return (
          <Task
            key={task.id}
            id={task.id}
            icon={icons[task.category]}
            label={task.label}
            category={task.category}
            checked={task.checked}
            handleChecked={toggleTask}
          />
        );
      })}
    </TodayTasksWrapper>
  );
}
