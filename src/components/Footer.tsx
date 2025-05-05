
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Linkedin className="text-linkedin-light h-8 w-8 mr-2" />
            <span className="font-semibold text-xl">.NET Angular Developer</span>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-linkedin-light transition-colors">Home</a></li>
                <li><a href="#skills" className="hover:text-linkedin-light transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-linkedin-light transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-linkedin-light transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-linkedin-light transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-linkedin-light transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-linkedin-light transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-linkedin-light transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-2 text-sm">
            .NET Developer & Angular Specialist. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
