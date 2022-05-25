import { useState } from 'react';

import { AppWrapper } from './styles';
import { MainContent } from '../Defaults';
import Menu from '../Menu';
import Header from '../Header';
import TodayTasks from '../TodayTasks';
import TaskOverview from '../TaskOverview';

export default function AppPage() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  return (
    <AppWrapper>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      <MainContent>
        <Header label={selectedMenu} />
        <TaskOverview completed={10} inProgress={3} />

        <TodayTasks />
      </MainContent>
    </AppWrapper>
  );
}
