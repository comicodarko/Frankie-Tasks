import { useContext } from 'react';

import FilterOption from '../FilterOption';
import { FilterWrapper } from './styled';
import { GlobalContext } from '../../../Context';

export default function Filter() {
  const { statusToShow, setStatusToShow } = useContext(GlobalContext);
  const options = [
    {label: 'Não concluídos', value: 'unchecked'},
    {label: 'Concluídos', value: 'checked'},
    {label: 'Todos', value: 'all'},
  ]

  return (
    <FilterWrapper>
      {options.map(option => 
        <FilterOption 
          key={option.value}
          label={option.label} 
          checked={statusToShow === option.value} 
          setCheck={setStatusToShow} 
        />  
      )}
    </FilterWrapper>
  );
}
