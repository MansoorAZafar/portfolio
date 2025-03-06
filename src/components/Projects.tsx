"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Card Clash",
    description:
      "A simple unity game integrated into a simple Blazor application with a .NET Web Core API as the backend with a PostgreSQL database.",
    image: "https://github.com/user-attachments/assets/87beddb0-5d35-4ee0-9fb5-b4d34b864ac8?height=200&width=400",
    github: "https://github.com/MansoorAZafar/CardClash",
    tags: ["Blazor", ".NET Core Web API", "NeonDB", "Unity"],
  },
  {
    id: 2,
    title: "Mini Quest",
    description:
      "A web-based rouge-like 2D short game with authentication and authorization. Built with: NextJs, NodeJs, ExpressJS, MongoDB.",
    image: "https://raw.githubusercontent.com/MansoorAZafar/FullStack-React-Game/main/Frontend/public/Logo%20(1).png?height=200&width=400",
    github: "https://github.com/MansoorAZafar/FullStack-React-Game",
    tags: ["NextJS", "Express", "NodeJS", "MongoDB"],
  },
  {
    id: 3,
    title: "CSharp Academy",
    description:
      "All the projects I've done from the C# Academy",
    image: "https://thecsharpacademy.com/img/logo.png?height=200&width=400",
    github: "https://github.com/MansoorAZafar/CSharp-Academy",
    tags: ["C#", "ASP.NET", ".NET Web API", "EF Core", "MS SQL", "SQLite", "Spectre.Console", "Web Scraping", "EPPlus", "MSTest", "and more!"],
  },
  {
    id: 4,
    title: "Assembly Line",
    description:
      "A simulation of an assembly line with a number of stations. All done in C++.",
    image: "https://github.com/user-attachments/assets/e35c7800-dcff-4788-ab29-e0d84b847b9a?height=200&width=400",
    github: "https://github.com/MansoorAZafar/Seneca-College-BSD/tree/master/btp305%20-%20object-oriented%20software%20development%20using%20C%2B%2B/ms3",
    tags: ["C++"],
  },
  {
    id: 5,
    title: "Lego Collection",
    description:
      "A NodeJS application to show, update, create and delete lego sets. Built with: NodeJS and NeonDB ",
    image: "https://github.com/user-attachments/assets/e463fe5b-7f01-4c25-9502-82b6a2123ba6?height=200&width=400",
    github: "https://github.com/MansoorAZafar/Seneca-College-BSD/tree/master/BTI325%20-%20Web%20Programming%20Tools%20and%20Frameworks/Assignment%202",
    tags: ["NodeJS", "NeonDB"],
  },
  {
    id: 6,
    title: "Django Parking Simulator API",
    description:
      "A backend API for accessing and  managing parking spots and logging in. Provides parking spots, reserving a spot, and content management.",
    image: "https://github.com/MansoorAZafar/Django-Flask-Parking-Application/assets/164381371/1fa7033a-8f41-4709-8d9d-d438213c2cb3?height=200&width=400",
    github: "https://github.com/username/social-dashboardhttps://github.com/MansoorAZafar/Django-Flask-Parking-Application/tree/main/Backend",
    tags: ["Django", "Python", "Docker", "Sql Server"],
  },
  {
    id: 7,
    title: "Java 2D Dungeon Crawler (ish) Game",
    description:
      "My first ever comparatively big application in Java, a 2D game made with just Java",
    image: "https://github.com/user-attachments/assets/5aa2f502-2bb6-4caa-bac8-ffd6796f5257?height=200&width=400",
    github: "https://github.com/MansoorAZafar/java/tree/main/Game",
    tags: ["JavaScript", "OpenWeatherAPI", "Leaflet.js"],
  },
]

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mt-4 text-xl text-white/70">A collection of my recent work and personal projects</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {currentProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-gray-800/50 text-white border border-gray-700">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-medium text-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 1}
            className="border-gray-600 text-white hover:bg-gray-700 disabled:opacity-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <div className="text-white">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="border-gray-600 text-white hover:bg-gray-700 disabled:opacity-50"
          >
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

