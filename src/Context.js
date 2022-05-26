import { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [uncheckedTasks, setUncheckedTasks] = useState([]);
  const [statusToShow, setStatusToShow] = useState('');

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    tasks && setTasks(JSON.parse(tasks));
    setStatusToShow('unchecked');
  }, []);

  useEffect(() => {
    tasks.length > 0 && localStorage.setItem('tasks', JSON.stringify(tasks));
    setCheckedTasks(() => tasks.filter(task => task.checked));
    setUncheckedTasks(() => tasks.filter(task => !task.checked));
  }, [tasks]);

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
        statusToShow,
        setStatusToShow,
        checkedTasks,
        uncheckedTasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
