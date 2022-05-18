import { TaskOverviewWrapper } from './styles';

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
    </TaskOverviewWrapper>
  );
}
