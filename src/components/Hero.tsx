
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code, Laptop, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 lg:min-h-[85vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  John Doe
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-linkedin mb-2">
                  Full Stack .NET & Angular Developer
                </h2>
                <p className="text-gray-600 mb-6">
                  Passionate about creating modern web applications using .NET Core, Angular, and cloud technologies.
                  With 5+ years of experience building scalable solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="linkedin-button">
                  <Mail size={18} />
                  Contact Me
                </Button>
                <Button variant="outline" className="linkedin-button-outline">
                  View Projects
                  <ArrowRight size={18} />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Briefcase size={20} className="text-linkedin" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Code size={20} className="text-linkedin" />
                  <span>.NET Core Expert</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Laptop size={20} className="text-linkedin" />
                  <span>Angular Specialist</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
