import { useContext } from 'react';
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular';

import MoreOption from '../MoreOption';
import { Tooltip } from './styled';
import { GlobalContext } from '../../../Context';

export default function More() {
  const { statusToShow, setStatusToShow } = useContext(GlobalContext);

  return (
    <Tooltip>
      <div className="contentWrapper">
        <MoreOption label="Todos" checked={statusToShow === 'all'} setCheck={setStatusToShow} />
        <MoreOption
          label="Não concluídos"
          checked={statusToShow === 'unchecked'}
          setCheck={setStatusToShow}
        />
        <MoreOption
          label="Concluídos"
          checked={statusToShow === 'checked'}
          setCheck={setStatusToShow}
        />
        <span className="marker" />
      </div>
      <DotsHorizontalRounded className="moreIcon" size={35} />
    </Tooltip>
  );
}
