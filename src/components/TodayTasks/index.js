import { useContext, useEffect, useState } from 'react';

import Task from './Task';
import More from './More';
import { TodayTaskHeader, TodayTasksWrapper } from './styles';
import { GlobalContext } from '../../Context';

import IconCode from '../../assets/category-icons/code.png';
import IconSocial from '../../assets/category-icons/social.png';
import IconStudy from '../../assets/category-icons/study.png';
import IconWork from '../../assets/category-icons/work.png';

export default function TodayTasks() {
  const { tasks, setTasks, checkedTasks, uncheckedTasks, statusToShow } =
    useContext(GlobalContext);
  const [selectedTasks, setSelectedTasks] = useState(uncheckedTasks);
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

  function handleChange() {
    const selected =
      statusToShow === 'unchecked'
        ? uncheckedTasks
        : statusToShow === 'checked'
        ? checkedTasks
        : tasks;

    setSelectedTasks(selected.sort(task => task.checked));
  }

  useEffect(() => {
    handleChange();
  }, [statusToShow]);

  useEffect(() => {
    handleChange();
  }, [uncheckedTasks, checkedTasks]);

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <TodayTasksWrapper>
      <TodayTaskHeader>
        <h2>Tasks {statusToShow === 'unchecked'
        ? 'a serem feitas'
        : statusToShow === 'checked' && 'concluídas'} </h2>
        <More />
      </TodayTaskHeader>
      <main>
        {selectedTasks.map(task => {
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
      </main>
    </TodayTasksWrapper>
  );
}
