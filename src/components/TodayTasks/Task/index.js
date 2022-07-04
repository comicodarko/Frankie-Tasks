import { useState } from 'react';
import { baseUrl } from '../../../service/api';
import { TaskWrapper } from './styles';
import { useLongPress } from 'use-long-press';

export default function Task({ id, label, category, checked, handleChecked }) {
  const bind = useLongPress(() => {
    // ...
  },
  { onCancel: () => handleChecked(id) });

  return (
    <TaskWrapper {...bind()}
      className="animationRight"
      checked={checked}
    >
      <div>
        <img src={`${baseUrl}${category.iconPath}`} alt={category.label} />
        <div>
          <h3>&nbsp;&nbsp;{label}&nbsp;&nbsp;</h3>
          <h4>&nbsp;&nbsp;&nbsp;{category.label}</h4>
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
