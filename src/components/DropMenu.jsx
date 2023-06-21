export default function DropMenu({ menuItems, menuIcons }) {
  function toggleMenu() {
    menuItems.current.classList.toggle("activeMenu");

    if (window.innerWidth <= 768) {
      menuIcons.current.classList.toggle("activeMenu");
    }
  }

  return (
    <div onClick={toggleMenu} className="toggle-button">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
