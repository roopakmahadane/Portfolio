export default function Cover() {
    return (
        <div className="flex min-h-screen flex-1 w-full px-6 md:px-12 py-12">
        {/* Sidebar - Socials */}
        <div className="md:w-1/6 mb-10 md:mb-0">
          <div className="hidden md:block space-y-4 text-sm text-gray-600 sticky top-20">
            <p>📫</p>
            <p>🐦 </p>
            <p>🌐</p>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="md:w-4/6  space-y-4 max-w-4/5 pt-20 md:pt-36 mx-auto">
          <h1 className="text-xl text-[#bb86fc]">Hi, my name is</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#ffffff]">
            Roopak Mahadane.
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#b0b0b0]">
          I like building stuff that excites me.
          </h3>
          <p className="mt-6 max-w-2/3 text-lg text-[#b0b0b0] leading-relaxed ">
            I’m an HR Manager by profession but passionate about code, Web3,
            and building decentralized applications. Currently learning Solidity,
            working on dApps, and exploring tokenized economies.
          </p>
        </div>
        <div className="hidden md:block md:w-1/6 mb-10 md:mb-0">
          <div className="space-y-4 text-sm text-gray-600 sticky top-20">
            <p>📫 roopakmahadane@gmail.com</p>
            <p>🐦 @yourhandle</p>
            <p>🌐 @roopak</p>
          </div>
        </div>
      </div>
    );
}