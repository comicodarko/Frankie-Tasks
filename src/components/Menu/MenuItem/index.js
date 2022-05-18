import { MenuItemWrapper } from './styles';

export default function MenuItem({ icon, activeIcon, label, active, handleChangeMenu }) {
  return (
    <MenuItemWrapper active={active} onClick={handleChangeMenu}>
      {active ? (
        <div className="animationShow">
          <img src={activeIcon} alt={label} />
        </div>
      ) : (
        <>
          <img className="" src={icon} alt={label} />
        </>
      )}
      {label}
    </MenuItemWrapper>
  );
}
