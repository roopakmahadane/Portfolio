import stakeMe from "../assets/stakeMe.png"

export default function ProjectCard1() {
    return (
        <div className="flex flex-row w-full relative z-0 font-inter">
            <div className=" w-full md:block md:w-4/6 relative drop-shadow-lg backdrop-opacity-10 md:backdrop-opacity-100 overflow-visible">           
             <img className="rounded-lg min-h-80 md:h-full z-0 object-cover" src={stakeMe} alt="StakeMe"/>
             <div className="absolute inset-0 md:bg-[#bb86fc]/30  bg-black/70 bg-opacity-90  rounded-lg cursor-pointer md:hover:bg-transparent transition duration-200 "></div>
            </div>
            <div className="w-full md:w-3/6 z-10 absolute md:right-0 mt-4 md:mt-4 lg:mt-12 overflow-visible">
                <h1 className="text-left md:ml-7 ml-5 md:text-right text-xl text-[#bb86fc]  font-inter">Project</h1>
                <a target="_blank" href="https://stake-me-pink.vercel.app/"><h1 className="text-left md:ml-7 ml-5 md:text-right text-[#b0b0b0] text-4xl font-bold sm:pb-4 font-inter">StakeMe</h1></a>
            <div className="w-full z-10 absolute  right-0 md:bg-[#1e1e1e] text-white p-5 rounded-lg shadow-lg backdrop-opacity-10 md:backdrop-opacity-100">
           <p className="text-left md:text-right text-lg font-inter text-gray-200 md:p-2 xd:pb-1 ">
           StakeMe lets fans invest in creators by buying personal tokens tied to their social presence on Farcaster and Ethereum.
            </p> 
            <p className="text-left md:text-right text-lg font-inter text-gray-400 xs:pb-2 ">
           Solidity | React | Hardhat | Tailwind
            </p> 
            <div className="space-x-2 flex  bottom-0 justify-start mt-1 sm:mt-5  md:justify-end">
                <a target="_blank" href="https://github.com/roopakmahadane/StakeMe">
                <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 pointer-cursor" src="./src/assets/github.png" alt="github"/>
                </a>

                <a target="_blank" href="https://stake-me-pink.vercel.app/">
                <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2" src="./src/assets/share.png" alt="github"/>
                </a>
            </div>
           </div>      
            </div>
            
        </div>
    )
}