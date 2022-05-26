import { useState, useContext } from 'react';

import { AppWrapper } from './styles';
import { MainContent } from '../Defaults';
import Menu from '../Menu';
import Header from '../Header';
import TodayTasks from '../TodayTasks';
import TaskOverview from '../TaskOverview';
import { GlobalContext } from '../../Context';

export default function AppPage() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const { checkedTasks, uncheckedTasks } = useContext(GlobalContext);

  return (
    <AppWrapper>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      <MainContent>
        <Header label={selectedMenu} />
        <TaskOverview
          completed={checkedTasks.length}
          inProgress={uncheckedTasks.length}
        />

        <TodayTasks />
      </MainContent>
    </AppWrapper>
  );
}
