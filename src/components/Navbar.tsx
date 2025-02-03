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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-blue-500 font-bold text-xl">
              CosmicX
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavButton onClick={() => scrollToSection('planets')}>Planets</NavButton>
              <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
              <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
            </div>
            <div className="ml-6 flex items-center space-x-4">
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
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavButton onClick={() => scrollToSection('planets')}>Planets</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('about')}>About</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('contact')}>Contact</MobileNavButton>
            <div className="px-3 py-2 flex items-center space-x-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </button>
);

const MobileNavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
  >
    {children}
  </button>
);

export default Navbar;