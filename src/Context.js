
import { useState, createContext, useEffect } from 'react';
import { getCategories, getLetterboxdDiary, getTasks } from './service/api';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [uncheckedTasks, setUncheckedTasks] = useState([]);
  const [statusToShow, setStatusToShow] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Tasks');
  const [letterboxd, setLetterboxd] = useState({
    user: false,
    enabled: false,
    movies: []
  });

  async function fetchData() {
    setCategories(await getCategories());
    setTasks(await getTasks());
    const letterboxdJSON = JSON.parse(localStorage.getItem('letterboxd'));
    if(letterboxdJSON) {
      setLetterboxd(letterboxdJSON);
      if(letterboxdJSON.user && letterboxdJSON.enabled) { 
        handleGetLetterboxd(letterboxdJSON); 
      }
    }
  }

  async function handleGetLetterboxd(letterboxdJSON) {
    getLetterboxdDiary(letterboxdJSON ? letterboxdJSON.user : letterboxd.user)
      .then(movies => {
        setLetterboxd(old => {
          const newLetterboxd = {...old, movies};
          localStorage.setItem('letterboxd', JSON.stringify(newLetterboxd));
          return newLetterboxd;
        })
      });
  }

  useEffect(() => {
    fetchData();
    setStatusToShow('unchecked');
  }, []);

  useEffect(() => {

  }, [letterboxd.enabled]);

  useEffect(() => {
    // tasks.length > 0 && localStorage.setItem('tasks', JSON.stringify(tasks));
    setCheckedTasks(() => tasks.filter(task => task.checked));
    setUncheckedTasks(() => tasks.filter(task => !task.checked));
  }, [tasks]);

  useEffect(() => {
    if(letterboxd.user && letterboxd.enabled) { 
      handleGetLetterboxd(); 
    }
  }, [letterboxd.enabled]);

  return (
    <GlobalContext.Provider
      value={{
        tasks, setTasks,
        statusToShow, setStatusToShow,
        checkedTasks, uncheckedTasks,
        selectedMenu, setSelectedMenu,
        categories, setCategories,
        letterboxd, setLetterboxd
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
