import { useState, useContext } from 'react';

import { CustomSelect, NewTaskWrapper } from './styles';
import { AddToQueue } from '@styled-icons/boxicons-regular';

import { GlobalContext } from '../../../Context';
import { baseUrl, newCategory } from '../../../service/api';

export default function NewCategory({iconPaths, setShowNewCategory}) {
  const { setCategories } = useContext(GlobalContext);
  const [label, setLabel] = useState('');
  const [iconPath, setIconPath] = useState({});
  const icons = iconPaths.map(path => ({value: path}));
 
  const customStyles = { 
    control: (base, state) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      borderRadius: 0,
      height: '2em',
      minHeight: '2.1rem',
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

  function handleNewCategory() {
    if(label && iconPath.value) {
      newCategory(label, iconPath.value).then(newCategory => {
        newCategory && setCategories(old => [...old, newCategory]);
        setShowNewCategory(false);
      });
    }
  }

  return (
    <NewTaskWrapper className="animationRight">
      <input
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
        autoFocus
        placeholder="Categoria"
      />
      <CustomSelect
        options={icons}
        isSearchable={false}
        placeholder="ícone"
        styles={customStyles}
        value={iconPath}
        onChange={setIconPath}
        getOptionLabel={option => (
          <div className='option'>
            <img src={`${baseUrl}${option.value}`} alt={option.value} />
          </div>
        )}
      />
      <button className="add" onClick={handleNewCategory}>
        <AddToQueue size={30} />
      </button>
    </NewTaskWrapper>
  );
}
