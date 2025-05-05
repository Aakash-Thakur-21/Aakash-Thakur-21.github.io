
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDownloadCV = () => {
    // Create a dummy CV file link
    const link = document.createElement('a');
    link.href = 'https://www.africau.edu/images/default/sample.pdf'; // Sample PDF link
    link.download = 'developer_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <Linkedin className="text-linkedin h-8 w-8" />
          <span className="font-semibold text-lg hidden md:inline">.NET Angular Developer</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="font-medium hover:text-linkedin transition-colors">Home</a>
          <a href="#skills" className="font-medium hover:text-linkedin transition-colors">Skills</a>
          <a href="#projects" className="font-medium hover:text-linkedin transition-colors">Projects</a>
          <a href="#experience" className="font-medium hover:text-linkedin transition-colors">Experience</a>
          <a href="#contact" className="font-medium hover:text-linkedin transition-colors">Contact</a>
          <Button 
            className="bg-linkedin hover:bg-linkedin-dark ml-2"
            onClick={handleDownloadCV}
          >
            <Download size={16} />
            Download CV
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-linkedin"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium py-2 hover:text-linkedin transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="font-medium py-2 hover:text-linkedin transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="font-medium py-2 hover:text-linkedin transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="font-medium py-2 hover:text-linkedin transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="font-medium py-2 hover:text-linkedin transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-linkedin hover:bg-linkedin-dark w-full mt-2"
              onClick={handleDownloadCV}
            >
              <Download size={16} />
              Download CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
