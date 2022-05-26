import { TaskOverviewWrapper } from './styles';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TaskOverviewContent({ amount, all, label, Icon }) {
  const percent = parseInt((amount / all) * 100);
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
          value={amount}
          maxValue={all}
          styles={buildStyles({
            pathColor: '#ff80bf'
          })}
          strokeWidth={10}
        >
          <span>{percent}%</span>
        </CircularProgressbarWithChildren>
      </section>
    </TaskOverviewWrapper>
  );
}
