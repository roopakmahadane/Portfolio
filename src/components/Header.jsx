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
    <div
      className={
        "flex font-inter p-5 space-x-80 justify-center items-center sticky top-0 z-50 transition-transform duration-500 ease-in-out transform " +
        (scrollDown ? "-translate-y-full" : "translate-y-0") +
        " bg-[#121212] text-white"
      }
    >
      <div>
        <h1 className="text-2xl text-[#bb86fc]">RM</h1>
      </div>
      <div className="flex space-x-4">
        <div><h1>About</h1></div>
        <div><h1>Projects</h1></div>
        <div><h1>Contact</h1></div>
      </div>
    </div>
  );
}
