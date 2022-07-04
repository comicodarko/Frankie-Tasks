import { useContext } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import { GlobalContext } from '../../../Context';
import { TaskOverviewWrapper } from './styles';

export default function TaskOverviewContent({ amount, all, label, Icon, type }) {
  const percent = amount ? parseInt((amount / all) * 100) : '--';
  const { setStatusToShow } = useContext(GlobalContext);
  return (
    <TaskOverviewWrapper onClick={() => setStatusToShow(type)}>
      <section>
        <span>
          <Icon />
        </span>
        <div>
          <h3>{amount} Task{amount !== 1 && 's'}</h3>
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
