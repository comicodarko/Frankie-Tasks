import { useState, useContext } from 'react';

import { AppWrapper } from './styles';
import { MainContent } from '../Defaults';
import Menu from '../Menu';
import Header from '../Header';
import TodayTasks from '../TodayTasks';
import TaskOverview from '../TaskOverview';
import { GlobalContext } from '../../Context';
import Settings from '../Settings';

export default function AppPage() {
  const { checkedTasks, uncheckedTasks, selectedMenu } = useContext(GlobalContext);

  return (
    <AppWrapper>
      <Menu />

      <MainContent>
        <Header />
        {selectedMenu === 'Configurações'
          ? <Settings />
          : 
          <>
            <TaskOverview
              completed={checkedTasks.length}
              inProgress={uncheckedTasks.length}
            />

            <TodayTasks />
          </>
        }
      </MainContent>
    </AppWrapper>
  );
}
