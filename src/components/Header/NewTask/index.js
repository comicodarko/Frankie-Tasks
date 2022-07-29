
import { useState, useContext, useEffect } from 'react';
import { TaskListSquareAdd } from '@styled-icons/fluentui-system-filled';

import DefaultModal from '../../DefaultModal';
import { CustomSelect, NewTaskButton, NewTaskDates, NewTaskWrapper } from './styles';
import { GlobalContext } from '../../../Context';
import { baseUrl, newTask } from '../../../service/api';
import { Row } from '../../Defaults';
import Checkbox from '../../Checkbox';

export default function NewTask({isVisible, setIsVisible}) {
  const { categories, setTasks } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [haveLimit, setHaveLimit] = useState(false);
  const [initialDate, setInitialDate] = useState(new Date().toISOString().substring(0, 10));
  const [finalDate, setFinalDate] = useState(null);
  const customStyles = { 
    control: (base, state) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      borderRadius: 0,
      height: '2em',
      minHeight: '2rem',
    }),
    dropdownIndicator: () => ({
      'svg': {
        display: 'none'
      }
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? 'var(--pink)' : 'var(--purple)',
    }),
  }

  function handleNewTask(e) {
    e.preventDefault();
    if(text && category) {
      setIsVisible(false);
      newTask(text, category, initialDate, finalDate).then(response => {
        const { data } = response;
        setTasks(old => [...old, data]);
        setText('');
        setCategory('');
      });
    }
  }

  useEffect(() => {
    if(!isVisible) {
      setHaveLimit(false);
      setInitialDate(new Date().toISOString().substring(0, 10));
      setFinalDate(null);
    } 
  }, [isVisible]);

  useEffect(() => {
    if(!haveLimit) {
      setInitialDate(new Date().toISOString().substring(0, 10));
      setFinalDate(null);
    }
  }, [haveLimit]);

  return (
    <DefaultModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <form onSubmit={e => handleNewTask(e)}>
        <NewTaskWrapper>
          <input
            value={text} onChange={e => setText(e.target.value)}
            placeholder="Task" autoFocus
          />
          <CustomSelect options={categories}
            onChange={setCategory} value={category} isSearchable={false}
            placeholder="Categoria" styles={customStyles}
            getOptionLabel={option => (
              <div className='option'>
                <img src={`${baseUrl}${option.iconPath}`} alt={option.label} />
                <span>{option.label}</span>
              </div>
            )}
          />
        </NewTaskWrapper>
        <Row onClick={() => setHaveLimit(!haveLimit)}>
          <Checkbox checked={haveLimit} onClick={() => setHaveLimit(!haveLimit)}/>
          <span style={{ marginLeft: -10, cursor: 'pointer' }}>Definir Datas</span>
        </Row>
        
        <NewTaskDates show={haveLimit} className="animationShow">
          <input type="date" value={initialDate} onChange={e => setInitialDate(e.target.value)} />
          <span>até</span>
          <input type="date" value={finalDate || ''} onChange={e => setFinalDate(e.target.value)}/>
        </NewTaskDates>

        <NewTaskButton type="submit">
          <TaskListSquareAdd size={30} />
        </NewTaskButton>
      </form>
    </DefaultModal>
  );
}
