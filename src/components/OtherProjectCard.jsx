import share from "../assets/share.png";
import github from "../assets/github.png";

export default function OtherProjectCard({title, description, githubLink, liveLink, stack}) {
    return(
        <div className="flex flex-col bg-[#1e1e1e] rounded-lg shadow-lg p-6 mb-6 hover:scale-105 transition-transform duration-300">
                 <div className="space-x-2 mb-5 flex md:mb-10 mt-1 sm:mt-5 ">
                <a target="_blank" href={githubLink}>
                <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 pointer-cursor" src={github} alt="github"/>
                </a>

                <a target="_blank" href={liveLink}>
                <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2" src={share} alt="github"/>
                </a>
            </div>
            <div className="font-inter">
            <h1 className="text-white text-2xl md:mb-5">{title}</h1>
            <p className="text-gray-400 text-lg">{description}</p>
            <p className="text-gray-500 text-md mt-2">{stack}</p>
            </div>
          
        </div>
    )
}