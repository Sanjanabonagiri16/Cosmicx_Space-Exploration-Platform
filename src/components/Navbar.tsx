import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-space-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-space-pink font-bold text-xl">CosmicX</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#missions">Missions</NavLink>
              <NavLink href="#planets">Planets</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="ml-6">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-space-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#missions">Missions</MobileNavLink>
            <MobileNavLink href="#planets">Planets</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="px-3 py-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-space-pink px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-gray-400 dark:hover:text-space-pink"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-space-pink block px-3 py-2 rounded-md text-base font-medium dark:text-gray-400 dark:hover:text-space-pink"
  >
    {children}
  </a>
);

export default Navbar;