import { useState } from 'react';
import { AppWrapper } from './styles';
import Menu from '../Menu';
import TodayTasks from '../TodayTasks';
import TaskOverview from '../TaskOverview';
import { MainContent } from '../Defaults';

export default function AppPage() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  return (
    <AppWrapper>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <MainContent>
        <TaskOverview completed={10} inProgress={3} />

        <TodayTasks />
      </MainContent>
    </AppWrapper>
  );
}
