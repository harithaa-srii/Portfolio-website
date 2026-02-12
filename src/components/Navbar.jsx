import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle"; // adjust path if needed

export const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background px-4 py-3" role="navigation" aria-label="Main navigation">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center gap-6 flex-wrap">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 text-sm sm:text-base ${
                  isActive
                    ? "font-bold underline underline-offset-4 text-purple-600"
                    : "hover:font-semibold"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Theme Toggle on Right */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
