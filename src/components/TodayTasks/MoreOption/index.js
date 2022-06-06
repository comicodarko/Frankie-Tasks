import { MoreOptionWrapper } from './styled';

export default function MoreOption({ label, checked, setCheck }) {
  const value = {
    Todos: 'all',
    'Não concluídos': 'unchecked',
    Concluídos: 'checked'
  };

  return (
    <MoreOptionWrapper onClick={() => setCheck(value[label])}>
      <div className="pretty p-default p-curve p-smooth">
        <input type="checkbox" checked={checked} readOnly />
        <div className="state p-info">
          <i className="icon mdi mdi-check"></i>
          <label></label>
        </div>
      </div>
      {label}
    </MoreOptionWrapper>
  );
}
