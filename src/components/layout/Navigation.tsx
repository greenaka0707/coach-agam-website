const menus = [
  "Home",
  "About",
  "Expertise",
  "Services",
  "Resources",
  "Portfolio",
  "Contact",
];

export default function Navigation() {
  return (
    <nav>
      {menus.map((menu) => (
        <span key={menu}>{menu}</span>
      ))}
    </nav>
  );
}