export default function DropMenu({ menuItems }) {
  function toggleMenu() {
    menuItems.current.classList.toggle("activeMenu");
  }

  return (
    <div onClick={toggleMenu} className="toggle-button">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
