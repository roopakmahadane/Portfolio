export default function ProjectCard({src}) {
    return (
        <div className="flex flex-row w-full relative z-0 font-inter">
            <div className=" w-4/6 h-auto relative drop-shadow-lg ">           
             <img className="rounded-lg  h-full z-0" src={src} alt="StakeMe"/>
             <div className="absolute inset-0 bg-[#bb86fc]/30 rounded-lg cursor-pointer hover:bg-transparent transition duration-200 "></div>
            </div>
            <div className="w-3/6 z-10 absolute right-0 mt-16 ">
                <h1 className="text-right text-xl text-[#bb86fc]  font-inter">Project</h1>
                <a href="https://stake-me-pink.vercel.app/"><h1 className="text-right text-[#b0b0b0] text-4xl font-bold pb-4 font-inter">StakeMe</h1></a>
            <div className="w-full z-10 absolute  right-0 bg-[#1e1e1e] text-white p-5 rounded-lg shadow-lg">
           <p className="text-right text-lg font-inter text-gray-200 p-2">
           StakeMe lets fans invest in creators by buying personal tokens tied to their social presence on Farcaster and Ethereum.
            </p> 
           </div>
            </div>
            
        </div>
    )
}