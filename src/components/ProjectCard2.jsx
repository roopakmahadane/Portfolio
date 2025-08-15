import logisticEscrow from "../assets/escrowFi.png";
import share from "../assets/share.png";
import github from "../assets/github.png";

export default function ProjectCard2() {
    return (
        <div className="flex flex-row w-full bg-[#121212] h-full relative z-0 font-inter mb-20">
            <div className="w-full md:w-3/6 z-10 mt-4 md:mt-4  lg:mt-12 overflow-visible ">
                <h1 className="text-left md:ml-0 ml-4  text-xl text-[#bb86fc] font-inter sm:pt-5 md:pt-0">Project</h1>
                <a target="_blank" href="https://logistic-escrow-1sb2.vercel.app/">
                    <h1 className="text-left md:ml-0  ml-4 text-[#b0b0b0] text-4xl font-bold sm:pb-4 font-inter">EscrowFi</h1>
                </a>
                <div className="w-full z-10 md:bg-[#1e1e1e] text-white p-3 sm:p-5 rounded-lg shadow-lg backdrop-opacity-10 md:backdrop-opacity-100">
                    <p className="text-left text-lg font-inter text-gray-200 md:p-2 xd:pb-1">
                    A blockchain-based logistics escrow platform that secures delivery payments through smart contracts, ensuring trust between senders, drivers, and recipients.
                    </p>
                    <p className="text-left text-lg md:ml-2 font-inter text-gray-400 xs:pb-2">
                        Solidity | React | Hardhat | Tailwind
                    </p>
                    <div className="space-x-2 flex justify-start mt-1 sm:mt-5">
                        <a target="_blank" href="https://github.com/roopakmahadane/Logistic-Escrow">
                            <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 pointer-cursor" src={github} alt="github" />
                        </a>
                        <a target="_blank" href="https://logistic-escrow-1sb2.vercel.app/">
                            <img className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2" src={share} alt="share" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="w-full md:block md:w-4/6 right-0 absolute  z-0   overflow-visible">           
                <img className="rounded-lg min-h-80 md:h-full object-cover" src={logisticEscrow} alt="StakeMe" />
                <div className="absolute inset-0 md:bg-[#bb86fc]/50 bg-black/80  bg-opacity-90 rounded-lg cursor-pointer md:hover:bg-transparent transition-all duration-500 ease-in-out"></div>
            </div>
        </div>
    );
}
