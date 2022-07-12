import { Dismiss } from '@styled-icons/fluentui-system-filled';

import Menu from '../Menu';
import { Container } from './styles';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container isVisible={menuIsVisible}>
      <Dismiss size={45} onClick={() => setMenuIsVisible(false)}/>
      <Menu isMobile setMenuIsVisible={setMenuIsVisible} />
    </Container>
  )
}