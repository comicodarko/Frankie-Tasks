import { useContext } from 'react';
import {
  MoreHorizontalOutline,
  MoreVerticalOutline
} from '@styled-icons/evaicons-outline';

import MoreOption from '../MoreOption';
import { Tooltip } from './styled';
import { GlobalContext } from '../../../Context';

export default function More() {
  const { statusToShow, setStatusToShow } = useContext(GlobalContext);

  return (
    <Tooltip>
      <div className="contentWrapper">
        <MoreOption
          label="Todos"
          checked={statusToShow === 'all'}
          setCheck={setStatusToShow}
        />
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
      <MoreHorizontalOutline className="moreIcon" size={35} />
    </Tooltip>
  );
}
