
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-omni-orange font-bold text-2xl font-display">Omni</span>
          <span className="text-omni-dark font-bold text-2xl font-display">Food</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-omni-dark hover:text-omni-orange transition-colors font-medium">
            How it works
          </a>
          <a href="#meals" className="text-omni-dark hover:text-omni-orange transition-colors font-medium">
            Meals
          </a>
          <a href="#testimonials" className="text-omni-dark hover:text-omni-orange transition-colors font-medium">
            Testimonials
          </a>
          <a href="#pricing" className="text-omni-dark hover:text-omni-orange transition-colors font-medium">
            Pricing
          </a>
          <Button className="bg-omni-orange hover:bg-omni-yellow text-white transition-all duration-300 shadow-md hover:shadow-lg ml-4">
            Try for free
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-omni-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#how-it-works" 
              className="text-omni-dark hover:text-omni-orange transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </a>
            <a 
              href="#meals" 
              className="text-omni-dark hover:text-omni-orange transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meals
            </a>
            <a 
              href="#testimonials" 
              className="text-omni-dark hover:text-omni-orange transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-omni-dark hover:text-omni-orange transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-omni-orange hover:bg-omni-yellow text-white w-full mt-2 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try for free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
