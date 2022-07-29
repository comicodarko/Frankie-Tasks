import { useContext } from 'react';

import { GlobalContext } from '../../../Context';
import { baseUrl } from '../../../service/api';
import { TaskWrapper } from './styles';

export default function Task({ task, handleChecked }) {
  const { setSelectedMenu } = useContext(GlobalContext);

  return (
    <TaskWrapper 
      onClick={(e) => {e.stopPropagation(); handleChecked(task.id);}}
      className="animationRight"
      checked={task.checked}
    >
      <div className="infos">
        <img src={`${baseUrl}${task.category.iconPath}`} alt={task.category.label} />
        <div>
          <h3>&nbsp;&nbsp;{task.label}&nbsp;&nbsp;</h3>
          <h4 onClick={() => setSelectedMenu(task.category.label)}>
            {task.category.label}
          </h4>
        </div>
      </div>
      
      <div className="dates">
        <span>{task.dates.initial}</span>
        <span>{task.dates.final}</span>
      </div>

      <div className="pretty p-default p-curve p-smooth">
        <input type="checkbox" checked={task.checked} readOnly />
        <div className="state p-info">
          <i className="icon mdi mdi-check"></i>
          <label></label>
        </div>
      </div>
    </TaskWrapper>
  );
}
