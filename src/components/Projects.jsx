import ProjectCard from "./ProjectCard";
export default function Projects(){
    return(
        <div className="min-h-screen bg-[#121212] p-6 mx-auto max-w-6xl font-inter">
            <h1 className="text-3xl font-bold align-center text-center text-[#ffffff] md:text-left mb-4 mb-10"> Somethings I've built recently</h1>
            <ProjectCard src="./src/assets/stakeMe.png"/>
        </div>
    )
}