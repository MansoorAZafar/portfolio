import { ArrowRight} from "lucide-react"
import Image from "next/image";

const Intro = () => {

    const birthYear = 2004;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 text-center md:py-24 lg:py-32 w-full mt-16 md:mt-24">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="flex flex-col lg:flex-col gap-6 lg:gap-12 xl:gap-16 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-center lg:text-left space-y-4 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl">
                Mansoor Zafar
              </h1>
              <p className="text-xl text-white/80 md:text-2xl">
                Software Developer
              </p>
            </div>
            <div className="space-y-4 text-white/70">
              <p>
              I&apos;m {new Date().getFullYear() - birthYear} years old and 
              an aspiring Software Developer with a strong passion for building, testing 
              programs and want to make games. While I particularly enjoy backend 
              development, working with languages like Java, C# and upcoming GO, I plan on
              experimenting with more obscure languages for backend like C++ with Drogon. 
              From designing robust systems, testing applications, full stack development to exploring the creative side of game development, 
              I thrive in environments that allow me to explore a range of 
              technologies and build impactful solutions.
              </p>
            </div>
            <div className="flex flex-col gap-10 min-[400px]:flex-row">
              <button className="text-white hover:bg-indigo-700 ">
                <a href="#projects" className="flex items-center">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </button>
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="flex items-center justify-center mt-8 lg:mt-8">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-indigo-500/20">
              <Image
                width={350}
                height={350}
                alt="Profile Picture"
                className="object-cover"
                src="https://github.com/MansoorAZafar/portfolio/blob/main/public/iconpfp%20(1).png?raw=true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;
