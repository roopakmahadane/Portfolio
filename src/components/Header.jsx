import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [scrollDown, setScrollDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDown(true);
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        "flex justify-between items-center px-4 md:px-10 py-4 w-full top-0 z-50 transition-transform duration-500 ease-in-out transform " +
        (scrollDown ? "-translate-y-full" : "translate-y-0") +
        " bg-[#121212] text-white"
      }
    >
      {/* Logo */}
      <div>
        <h1 className="text-2xl border border-[#bb86fc] text-[#bb86fc] px-3 py-2 rounded-md">RM</h1>
      </div>

      {/* Nav Links or Burger */}
      <div className="flex items-center space-x-4">
        {/* Burger - visible on small screens */}
        <div className="md:hidden cursor-pointer">
          <img
            src="./src/assets/burger.png"
            className="h-12 w-12"
            alt="menu"
          />
        </div>

        {/* Nav Items - hidden on small screens */}
        <div className="hidden md:flex space-x-6 text-[#bb86fc]">
          <h1>About</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </header>
  );
}
