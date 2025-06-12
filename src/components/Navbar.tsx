
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/faculty", label: "Faculty" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/10aca2da-b212-42be-bcac-289d5f5b773c.png" 
              alt="Synergy School System" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">Synergy School System</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                <Link to="/admissions" onClick={() => setIsOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
