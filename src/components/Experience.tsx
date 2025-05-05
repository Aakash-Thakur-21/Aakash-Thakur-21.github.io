
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "Jan 2022 - Present",
    description: "Leading development of enterprise applications using .NET Core and Angular. Designing microservices architecture and implementing CI/CD pipelines.",
    achievements: [
      "Reduced API response times by 40% through performance optimization",
      "Led migration from legacy systems to modern .NET Core architecture",
      "Implemented automated testing that increased code coverage by 35%"
    ]
  },
  {
    id: 2,
    role: ".NET Developer",
    company: "Digital Innovations Inc",
    period: "Mar 2019 - Dec 2021",
    description: "Developed scalable web applications using ASP.NET Core, C#, and Angular. Worked with SQL Server and Entity Framework for data management.",
    achievements: [
      "Developed RESTful APIs consumed by multiple client applications",
      "Implemented authentication and authorization using Identity Server",
      "Optimized database queries resulting in 30% faster page loads"
    ]
  },
  {
    id: 3,
    role: "Junior Software Developer",
    company: "WebSoft Technologies",
    period: "Jun 2017 - Feb 2019",
    description: "Started as a junior developer working on web applications with ASP.NET MVC and jQuery. Transitioned to .NET Core and Angular development.",
    achievements: [
      "Built responsive UI components with Angular and Bootstrap",
      "Participated in Agile development process with two-week sprints",
      "Contributed to open source .NET libraries for data validation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8 rounded-full bg-linkedin flex items-center justify-center z-10">
                  <Briefcase size={18} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                }`}>
                  <Card className="linkedin-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-linkedin">{exp.role}</CardTitle>
                      <CardDescription className="text-gray-700 font-medium">
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-600">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <div className="mt-1 mr-2 w-1.5 h-1.5 rounded-full bg-linkedin"></div>
                            <p className="text-sm text-gray-700">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
