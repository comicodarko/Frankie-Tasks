import { useContext } from 'react';

import { GlobalContext } from '../../../Context';
import { baseUrl } from '../../../service/api';
import { TaskWrapper } from './styles';

export default function Task({ id, label, category, checked, handleChecked }) {
  const { setSelectedMenu } = useContext(GlobalContext);

  return (
    <TaskWrapper 
      onClick={(e) => {e.stopPropagation(); handleChecked(id);}}
      className="animationRight"
      checked={checked}
    >
      <div>
        <img src={`${baseUrl}${category.iconPath}`} alt={category.label} />
        <div>
          <h3>&nbsp;&nbsp;{label}&nbsp;&nbsp;</h3>
          <h4 onClick={() => setSelectedMenu(category.label)}>
            {category.label}
          </h4>
        </div>
      </div>

      <div className="pretty p-default p-curve p-smooth">
        <input type="checkbox" checked={checked} readOnly />
        <div className="state p-info">
          <i className="icon mdi mdi-check"></i>
          <label></label>
        </div>
      </div>
    </TaskWrapper>
  );
}
