import Checkbox from '../../Checkbox';
import { FilterOptionWrapper } from './styled';

export default function FilterOption({ label, checked, setCheck }) {
  const value = {
    Todos: 'all',
    'Não concluídos': 'unchecked',
    Concluídos: 'checked'
  };

  return (
    <FilterOptionWrapper onClick={() => setCheck(value[label])}>
      <Checkbox checked={checked} />
      {label}
    </FilterOptionWrapper>
  );
}
