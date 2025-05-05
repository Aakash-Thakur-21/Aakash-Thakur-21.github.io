
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  backend: [
    { name: ".NET Core", level: 90 },
    { name: "C#", level: 95 },
    { name: "ASP.NET", level: 85 },
    { name: "Entity Framework", level: 80 },
    { name: "Web API", level: 90 },
    { name: "SQL Server", level: 85 },
  ],
  frontend: [
    { name: "Angular", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "RxJS", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
  ],
  other: [
    { name: "Azure", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 85 },
    { name: "CI/CD", level: 70 },
    { name: "Microservices", level: 75 },
    { name: "Agile/Scrum", level: 80 },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding pt-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="linkedin-card">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-linkedin">
                <span className="p-2 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01" />
                  </svg>
                </span>
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsData.backend.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="linkedin-card">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-linkedin">
                <span className="p-2 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsData.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="linkedin-card md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-linkedin">
                <span className="p-2 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </span>
                Other Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsData.other.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linkedin h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Technologies I work with</h3>
          <div className="flex flex-wrap gap-2">
            {[
              ".NET Core", "C#", "ASP.NET", "Entity Framework", "SQL Server", "Angular", 
              "TypeScript", "RxJS", "Bootstrap", "HTML", "CSS", "JavaScript", "Azure",
              "Docker", "Git", "CI/CD", "REST APIs", "Microservices", "JWT", "Identity Server",
              "SignalR", "LINQ", "Dependency Injection", "Unit Testing", "MongoDB"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="bg-white border-linkedin text-gray-700 hover:bg-blue-50">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
