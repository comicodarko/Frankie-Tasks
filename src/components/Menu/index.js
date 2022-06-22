import { useContext } from 'react';
import MenuItem from './MenuItem';
import { MenuWrapper } from './styles';
import { GlobalContext } from '../../Context';

import DashboardIcon from '../../assets/menu-icons/dashboard.png';
import DashboardActiveIcon from '../../assets/menu-icons/dashboard-active.png';
import SettingsIcon from '../../assets/menu-icons/configuration.png';
import SettingsActiveIcon from '../../assets/menu-icons/configuration-active.png';
import Categories from './Categories';

export default function Menu() {
  const { selectedMenu, setSelectedMenu } = useContext(GlobalContext); 

  return (
    <MenuWrapper className="animationLeft">
      <h1>
        🤖 Frankie<span>.</span>
      </h1>

      <nav>
        <MenuItem
          icon={DashboardIcon}
          activeIcon={DashboardActiveIcon}
          label="Dashboard"
          active={selectedMenu === 'Dashboard'}
          handleChangeMenu={() => setSelectedMenu('Dashboard')}
        />
        <MenuItem
          icon={SettingsIcon}
          activeIcon={SettingsActiveIcon}
          label="Configuração"
          active={selectedMenu === 'Settings'}
          handleChangeMenu={() => setSelectedMenu('Settings')}
        />
      </nav>

      <Categories />

      <footer>
        Developed by <a href="https://github.com/comicodarko"> Cômico</a>
      </footer>
    </MenuWrapper>
  );
}
