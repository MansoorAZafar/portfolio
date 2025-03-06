"use client"

import { useState, useEffect } from "react"
import { Mail, MapPin, Github, Linkedin, User, ChevronLeft, ChevronRight } from "lucide-react"
import { SiCplusplus, SiC, SiPython, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

import { SiSpringboot, SiDotnet, SiDjango, SiFlask, SiReact, SiNextdotjs, 
  SiAmazon, SiDocker, SiBlazor, SiSpring, 
  SiGit, SiGithub, SiExpress, SiCircleci, SiPostman } from "react-icons/si";



const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setIsExpanded(!isMobileView) // Expanded by default on desktop, collapsed on mobile
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    if(isMobile) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      {isMobile && (<button
        onClick={toggleSidebar}
        className={`fixed z-50 flex items-center justify-center rounded-full bg-[#1a1b26] p-3 shadow-md transition-all duration-300 ${
          isExpanded ? "top-20 left-[350px] md:left-[350px]" : "top-30 left-4"
        }`}
      >
        {isExpanded ? (
          <ChevronLeft size={20} className="text-white" />
        ) : (
          <>
            <User size={20} className="text-white" />
            {!isExpanded && !isMobile && <ChevronRight size={20} className="ml-2 text-white" />}
          </>
        )}
      </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-[4rem] left-0 h-11/12 bg-gray-900 text-white transition-all duration-300 z-40 ${
          isExpanded ? "w-[350px] opacity-100 visible" : "w-0 opacity-0 invisible"
        }`}
      >
        <div className="h-full w-[350px] overflow-y-auto flex flex-col items-center py-8 px-5 border-r border-gray-800">
          {/* Profile Picture */}
          <div className="mb-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-700">
              <img src="/iconpfp (1).png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Mansoor Ahmad Zafar</h1>
            <p className="text-gray-400">Software Developer</p>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          {/* Location and Contact */}
          <div className="w-full mb-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={20} className="text-white" />
              <span>Vaughan, Ontario</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-white" />
              <a href="mailto:mansoorahmadzafarwork@gmail.com" className="text-[#3b82f6]">
                mansoorahmadzafarwork@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/mansoor-zafar-08b943307/" target="_blank" className="text-white hover:text-[#3b82f6] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="http://github.com/MansoorAZafar" target="_blank" className="text-white hover:text-[#3b82f6] transition-colors">
              <Github size={24} />
            </a>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          {/* Skills with Progress Circles */}
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <SiCplusplus size={24} className="text-blue-500" />
                <span>C++</span>
              </div>
              <div className="flex items-center gap-2">
                <SiC size={24} className="text-gray-500" />
                <span>C</span>
              </div>
              <div className="flex items-center gap-2">
                <FaJava size={24} className="text-red-500" />
                <span>Java</span>
              </div>
              <div className="flex items-center gap-2">
                <TbBrandCSharp size={24} className="text-purple-500" />
                <span>C#</span>
              </div>
              <div className="flex items-center gap-2">
                <SiPython size={24} className="text-yellow-500" />
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <SiJavascript size={24} className="text-yellow-400" />
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>

          
          {/* Frameworks & Libraries */}
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-4">Frameworks & Libraries</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <SiSpringboot size={24} className="text-green-500" />
                <span>Spring Boot</span>
              </div>
              <div className="flex items-center gap-2">
                <SiSpring size={24} className="text-black" />
                <span>Spring</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDotnet size={24} className="text-blue-500" />
                <span>.NET</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDjango size={24} className="text-green-700" />
                <span>Django</span>
              </div>
              <div className="flex items-center gap-2">
                <SiFlask size={24} className="text-gray-400" />
                <span>Flask</span>
              </div>
              <div className="flex items-center gap-2">
                <SiReact size={24} className="text-blue-400" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <SiNextdotjs size={24} className="text-black" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <SiExpress size={24} className="text-black" />
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-2">
                <SiBlazor size={24} className="text-black" />
                <span>Blazor</span>
              </div>

            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>


          {/* DevOps & Cloud */}
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-4">DevOps & Cloud</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <SiAmazon size={24} className="text-orange-500" />
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDocker size={24} className="text-blue-600" />
                <span>Docker</span>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-800 my-4"></div>


          {/* Tools & CI/CD */}
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-4">Tools & CI/CD</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <SiGit size={24} className="text-orange-500" />
                <span>Git</span>
              </div>
              <div className="flex items-center gap-2">
                <SiGithub size={24} className="text-white bg-black rounded-full p-1" />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <SiCircleci size={24} className="text-blue-500" />
                <span>Papercut SMTP</span>
              </div>
              <div className="flex items-center gap-2">
                <SiPostman size={24} className="text-orange-500" />
                <span>Postman</span>
              </div>
            </div>
          </div>

                    


        </div>
      </aside>

      {/* Overlay for mobile */}
      {isExpanded && isMobile && (
        <div className="fixed inset-0 bg-opacity-50 z-30" onClick={() => setIsExpanded(false)}></div>
      )}
    </>
  )
}

export default Sidebar
