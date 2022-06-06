import MenuItem from './MenuItem';
import { MenuWrapper } from './styles';

import DashboardIcon from '../../assets/menu-icons/dashboard.png';
import DashboardActiveIcon from '../../assets/menu-icons/dashboard-active.png';
import SettingsIcon from '../../assets/menu-icons/configuration.png';
import SettingsActiveIcon from '../../assets/menu-icons/configuration-active.png';

export default function Menu({ selectedMenu, setSelectedMenu }) {
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

      <footer>
        Developer by <a href="https://github.com/comicodarko"> Cômico</a>
      </footer>
    </MenuWrapper>
  );
}
