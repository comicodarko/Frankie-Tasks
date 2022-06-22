import { useState, createContext, useEffect } from 'react';
import { getCategories, getTasks } from './service/api';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [uncheckedTasks, setUncheckedTasks] = useState([]);
  const [statusToShow, setStatusToShow] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  async function fetchData() {
    setCategories(await getCategories());
    setTasks(await getTasks());
  }

  useEffect(() => {
    fetchData();
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
        tasks, setTasks,
        statusToShow, setStatusToShow,
        checkedTasks, uncheckedTasks,
        selectedMenu, setSelectedMenu,
        categories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
