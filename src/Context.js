import { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    setTasks(JSON.parse(tasks));
  }, []);

  useEffect(() => {
    tasks.length > 0 && localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}
