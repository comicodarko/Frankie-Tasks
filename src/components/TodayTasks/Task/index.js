import { TaskWrapper } from './styles';

export default function Task({ id, icon, label, category, checked, handleChecked }) {
  return (
    <TaskWrapper
      className="animationRight"
      onClick={() => handleChecked(id)}
      checked={checked}
    >
      <div>
        <img src={icon} alt={category} />
        <div>
          <h3>- {label} -</h3>
          <h4>{category}</h4>
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
