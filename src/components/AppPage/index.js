import { useState, useContext } from 'react';

import { AppWrapper, MobileMenuIcon } from './styles';
import { MainContent } from '../Defaults';
import Menu from '../Menu';
import Header from '../Header';
import TodayTasks from '../TodayTasks';
import TaskOverview from '../TaskOverview';
import { GlobalContext } from '../../Context';
import Settings from '../Settings';
import { MenuMobile } from '../MobileMenu';

export default function AppPage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { checkedTasks, uncheckedTasks, selectedMenu, categories } = useContext(GlobalContext);

  return (
    <AppWrapper>
      <MobileMenuIcon size={45} className="animationPulsate" 
        onClick={() => setMenuIsVisible(true)}
      />
      {window.innerWidth > 800 
        ? <Menu />
        : <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      }

      <MainContent>
        <Header />
        {selectedMenu === 'Configurações'
          ? <Settings />
          : categories.some(category => category.label === selectedMenu) 
          ? <TodayTasks />
          : <>
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
