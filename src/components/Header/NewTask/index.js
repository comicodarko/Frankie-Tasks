import { useState, useContext } from 'react';

import { CustomSelect, NewTaskWrapper } from './styles';
import { AddToQueue } from '@styled-icons/boxicons-regular';

import { GlobalContext } from '../../../Context';
import { baseUrl, newTask } from '../../../service/api';

export default function NewTask({setShowNewTask}) {
  const { categories, tasks, setTasks } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
 
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

  function handleNewTask() {
    if(text && category) {
      setText('');
      setCategory('');
      newTask(text, category.value).then(response => {
        if(response.status === 200) {
          setShowNewTask(false);

          const { data } = response.data;
          const category = categories.find(category => category.id === data.attributes.category);
          setTasks(old => [...old, {
            id: data.id,
            label: data.attributes.label,
            checked: data.attributes.checked,
            createdAt: data.attributes.createdAt,
            category
          }])
        } else {
          alert('Erro ao criar nova task');
        }
      });
    }
  }

  return (
    <NewTaskWrapper empty={text.length === 0} className="animationRight">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus
        placeholder="Task"
      />
      <CustomSelect
        options={categories}
        isSearchable={false}
        placeholder="Categoria"
        styles={customStyles}
        value={category}
        onChange={setCategory}
        getOptionLabel={option => (
          <div className='option'>
            <img src={`${baseUrl}${option.icon}`} alt={option.label} />
            <span>{option.label}</span>
          </div>
        )}
      />
      <button onClick={handleNewTask}>
        <AddToQueue size={30} />
      </button>
    </NewTaskWrapper>
  );
}
