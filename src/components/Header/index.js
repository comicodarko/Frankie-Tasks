import { HeaderWrapper } from './styled';
import { Button } from '../Defaults';
import { TaskListSquareAdd } from '@styled-icons/fluentui-system-filled';
import { NotificationsCircle } from '@styled-icons/ionicons-sharp';

export default function Header({ label }) {
  return (
    <HeaderWrapper>
      <h1>{label}</h1>

      <div>
        <Button>
          <TaskListSquareAdd size={25} /> Nova Task
        </Button>
        <button className="notifications">
          <NotificationsCircle size={45} />
        </button>
      </div>
    </HeaderWrapper>
  );
}
