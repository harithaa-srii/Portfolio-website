import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Writing Samples", path: "/writing-samples" },
    { name: "Design Work", path: "/design-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="p-4 flex flex-wrap gap-6 justify-center">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative inline-block transition duration-300 ${
              isActive ? "font-bold underline underline-offset-4 text-purple-600" : "hover:font-bold hover:underline"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
