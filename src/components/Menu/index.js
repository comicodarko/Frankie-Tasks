import { useContext } from 'react';
import MenuItem from './MenuItem';
import { MenuWrapper } from './styles';
import { GlobalContext } from '../../Context';

import TasksIcon from '../../assets/menu-icons/tasks.png';
import SettingsIcon from '../../assets/menu-icons/settings.png';
import Categories from './Categories';
import Movies from './Movies';

export default function Menu() {
  const { selectedMenu, setSelectedMenu, letterboxd } = useContext(GlobalContext); 

  return (
    <MenuWrapper className="animationLeft">
      <h1>
        🤖 Frankie<span>.</span>
      </h1>
      
      <MenuItem
        icon={TasksIcon}
        label="Tasks"
        active={selectedMenu === 'Tasks'}
        handleChangeMenu={() => setSelectedMenu('Tasks')}
      />

      <Categories />
      
      {letterboxd.movies &&
        letterboxd.movies.length > 0 && <Movies />
      }
      <MenuItem
        icon={SettingsIcon}
        label="Configurações"
        active={selectedMenu === 'Configurações'}
        handleChangeMenu={() => setSelectedMenu('Configurações')}
      />
      

      <footer>
        Developed by <a href="https://github.com/comicodarko"> Cômico</a>
      </footer>
    </MenuWrapper>
  );
}
