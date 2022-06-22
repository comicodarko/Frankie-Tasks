import { useContext, useEffect, useState } from 'react';

import Task from './Task';
import More from './More';
import { TodayTaskHeader, TodayTasksBody } from './styles';
import { DefaultWrapper } from '../Defaults';
import { GlobalContext } from '../../Context';
import { updateTask } from '../../service/api';

export default function TodayTasks() {
  const { tasks, setTasks, checkedTasks, uncheckedTasks, statusToShow } =
    useContext(GlobalContext);
  const [selectedTasks, setSelectedTasks] = useState(uncheckedTasks);

  function toggleTask(taskId, status) {
    function changeTask() {
      const tasksArray = [...tasks];
      let taskIndex = tasksArray.findIndex(task => task._id === taskId);
      tasksArray[taskIndex].checked = !tasksArray[taskIndex].checked;
      setTasks(tasksArray);
    }
    
    changeTask();
    
    updateTask(taskId, status).then(success => {
      if (!success){
        changeTask();
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
    <DefaultWrapper>
      <TodayTaskHeader>
        <h2>Tasks {statusToShow === 'unchecked'
        ? 'a serem feitas'
        : statusToShow === 'checked' && 'concluídas'} </h2>
        <More />
      </TodayTaskHeader>
      <TodayTasksBody>
        {selectedTasks.map(task => {
          return (
            <Task
              key={task._id}
              id={task._id}
              label={task.label}
              category={task.category}
              checked={task.checked}
              handleChecked={() => toggleTask(task._id, !task.checked)}
            />
          );
        })}
      </TodayTasksBody>
    </DefaultWrapper>
  );
}
