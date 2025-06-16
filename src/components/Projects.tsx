 
"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// Sample project data
import projectsList from "../data/Programming-Projects.json";
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage: number = 6;
  const projectsLength: number = Object.keys(projectsList.projects).length;
  const totalPages: number = Math.ceil(projectsLength / projectsPerPage)
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage

  const projects: Project[] = Object.values(projectsList.projects);
  const currentProjects: Project[] = projects.slice(indexOfFirstProject, indexOfLastProject)

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
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden bg-gray-800/50 text-white border border-gray-700"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 p-4 space-y-4">
                {/* Header */}
                <CardHeader className="p-0 space-y-2">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {project.title}
                  </CardTitle>
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

                {/* Description */}
                <CardContent className="p-0 flex-1">
                  <CardDescription className="text-sm text-gray-300 leading-snug line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>

                {/* Footer Button */}
                <CardFooter className="p-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700"
                  >
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
              </div>
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

