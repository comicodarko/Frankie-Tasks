import { TaskOverviewWrapper } from './styles';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TaskOverviewContent({ amount, label, Icon }) {
  return (
    <TaskOverviewWrapper>
      <section>
        <span>
          <Icon />
        </span>
        <div>
          <h3>{amount} Tasks</h3>
          <span className="type">{label}</span>
        </div>
      </section>
      <section className="progress">
        <CircularProgressbarWithChildren
          value={100}
          styles={buildStyles({
            pathColor: '#ff80bf'
          })}
          strokeWidth={10}
        >
          <span>100%</span>
        </CircularProgressbarWithChildren>
      </section>
    </TaskOverviewWrapper>
  );
}
