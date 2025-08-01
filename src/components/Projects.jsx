import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";
export default function Projects(){
    return(
        <div id="projects" className="min-h-screen bg-[#121212] p-6 sm:mx-10 md:mx-auto mx-auto max-w-6xl  font-inter">
            <h1 className="text-3xl font-bold align-center text-center text-[#ffffff] md:text-left mb-4 mb-10"> Somethings I've built recently</h1>
            <div className="flex flex-col gap-y-30">
    <ProjectCard1 />
    <ProjectCard2 />
    <ProjectCard3 />
  </div>
        </div>
    )
}