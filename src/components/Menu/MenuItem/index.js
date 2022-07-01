import { MenuItemWrapper } from './styles';

export default function MenuItem({ icon, label, active, handleChangeMenu }) {
  return (
    <MenuItemWrapper active={active} onClick={handleChangeMenu}>
      <img src={icon} alt={label} />
      {label}
    </MenuItemWrapper>
  );
}
