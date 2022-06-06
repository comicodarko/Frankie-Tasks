import { useState, useContext } from 'react';

import { CustomSelect, NewTaskWrapper } from './styles';
import { AddToQueue } from '@styled-icons/boxicons-regular';

import IconCode from '../../../assets/category-icons/code.png';
import IconSocial from '../../../assets/category-icons/social.png';
import IconStudy from '../../../assets/category-icons/study.png';
import IconWork from '../../../assets/category-icons/work.png';
import { GlobalContext } from '../../../Context';
import { baseUrl } from '../../../service/api';

export default function NewTask() {
  const [text, setText] = useState('');
  const { categories } = useContext(GlobalContext);

  const customStyles = { 
    control: base => ({
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
    })
  }

  return (
    <NewTaskWrapper>
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

        getOptionLabel={option => (
          <div className='option'>
            <img src={`${baseUrl}${option.icon}`} alt={option.label} />
            <span>{option.label}</span>
          </div>
        )}
        styles={customStyles}
      />
      <button>
        <AddToQueue size={30} />
      </button>
    </NewTaskWrapper>
  );
}
