
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Enterprise Management System",
    description: "A comprehensive management system for enterprise resource planning. Built with .NET Core backend and Angular frontend.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    tags: [".NET Core", "Angular", "SQL Server", "Azure", "REST API"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with real-time inventory tracking, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    tags: ["ASP.NET Core", "Angular", "Entity Framework", "Azure", "Stripe API"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    description: "Secure patient portal allowing appointment scheduling, medical record access, and secure messaging with healthcare providers.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    tags: [".NET Core", "Angular", "Identity Server", "SQL Server", "HIPAA Compliant"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "Multi-channel chat application with real-time messaging, file sharing, and user presence indicators.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    tags: ["ASP.NET Core", "Angular", "SignalR", "Azure", "WebSockets"],
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="linkedin-card overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-blue-50 border-linkedin text-linkedin">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="text-linkedin border-linkedin hover:bg-blue-50">
                  <Link size={16} className="mr-1" />
                  Demo
                </Button>
                <Button size="sm" className="bg-linkedin hover:bg-linkedin-dark">
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-linkedin text-linkedin hover:bg-blue-50">
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
