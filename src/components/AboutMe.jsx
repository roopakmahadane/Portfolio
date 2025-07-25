export default function AboutMe(){
return (
    <div className="min-h-screen bg-gray-100 p-6 mx-auto max-w-4xl font-inter">
        <h1 className="text-3xl font-bold align-center text-center md:text-left mb-4 ">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
        <div className="max-w-4/5 md:max-w-3/5 mb-6 md:mb-0">
        <p className="text-lg text-gray-700 mb-6 w-full font-inter">
        I started with engineering, worked in IT, and then took a detour through HR and management. While pursuing my MBA and working in people strategy, I realized that what really lights me up is building — not just systems and workflows, but real, working products.
        Now, I'm diving deep into Web3: writing Solidity, designing dApps, and exploring how decentralized tech can reshape the future.
        I’m recently built <a className="text-blue-700" href="https://stake-me-pink.vercel.app/">StakeMe</a>, a tokenized platform for creators to raise capital through revenue-sharing tokens. I care about clean code, open protocols, and building things that feel meaningful — whether they start as a wild idea or a quiet curiosity.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="grid grid-cols-2 max-w-2/3 mt-4">
           <div>
            <p>Solidity</p>
            <p>Javascript</p>
            <p>React</p>
           </div>
           <div>
            <p>Hardhat</p>
            <p>Tailwind CSS</p>
            <p>Node.js</p>
           </div>
        </div>
        </div>
        <div className="max-w-1/3 md:ml-6">
            <img className="mb-4" src="./src/assets/profile.png" alt="Profile" />
        </div>
        </div>
    </div>

)};