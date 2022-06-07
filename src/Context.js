import { useState, createContext, useEffect } from 'react';
import { getCategories, getTasks } from './service/api';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [uncheckedTasks, setUncheckedTasks] = useState([]);
  const [statusToShow, setStatusToShow] = useState('');

  useEffect(() => {
    getCategories().then(categoriesResult => {
      setCategories(categoriesResult);
      getTasks().then(tasksResult => {
        const tasks = tasksResult.map(task => {
          const category = categoriesResult.find(category => category.id === task.attributes.category); 
          return {
            id: task.id,
            label: task.attributes.label,
            checked: task.attributes.checked,
            createdAt: task.attributes.createdAt,
            category
          }
        })
        setTasks(tasks);
      })
    }); 

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
        categories,
        checkedTasks,
        uncheckedTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
