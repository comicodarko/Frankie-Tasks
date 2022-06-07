import { useContext, useEffect, useState } from 'react';

import Task from './Task';
import More from './More';
import { TodayTaskHeader, TodayTasksWrapper } from './styles';
import { GlobalContext } from '../../Context';
import { updateTask } from '../../service/api';

export default function TodayTasks() {
  const { tasks, setTasks, checkedTasks, uncheckedTasks, statusToShow } =
    useContext(GlobalContext);
  const [selectedTasks, setSelectedTasks] = useState(uncheckedTasks);

  function toggleTask(taskId, status) {
    updateTask(taskId, status).then(success => {
      if(success) {
        const tasksArray = [...tasks];
        let taskIndex = tasksArray.findIndex(task => task.id === taskId);
        tasksArray[taskIndex].checked = !tasksArray[taskIndex].checked;
        setTasks(tasksArray);
      } else {
        alert('Falha ao editar Task');
      }
    })
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
              label={task.label}
              category={task.category}
              checked={task.checked}
              handleChecked={() => toggleTask(task.id, !task.checked)}
            />
          );
        })}
      </main>
    </TodayTasksWrapper>
  );
}
