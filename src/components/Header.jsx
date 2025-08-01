import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [scrollDown, setScrollDown] = useState(false);
  const lastScrollY = useRef(0);
  const [burgerOpen, setBurgerOpen] = useState(false);

  // Scroll hide/show header
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

  // Lock scroll when modal is open
  useEffect(() => {
    if (burgerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [burgerOpen]);

  return (
    <>
      {/* Header */}
      <div
        className={
          "flex justify-between items-center px-4 md:px-10 py-4 w-full sticky top-0 z-50 transition-transform duration-500 ease-in-out transform " +
          (scrollDown ? "-translate-y-full" : "translate-y-0") +
          " bg-[#121212] text-white"
        }
      >
        {/* Logo */}
        <div>
          <h1 className="text-2xl border border-[#bb86fc] text-[#bb86fc] px-3 py-2 rounded-md">RM</h1>
        </div>

        {/* Nav + Burger */}
        <div className="flex items-center space-x-4">
          {/* Burger */}
          <div onClick={() => setBurgerOpen(prev => !prev)} className="md:hidden cursor-pointer">
            <img
              src="./src/assets/burger.png"
              className="h-12 w-12"
              alt="menu"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-[#bb86fc]">
          <a href="#about" className='cursor-pointer'><h1 className="text-lg ">About</h1></a>
          <a href="#projects" className='cursor-pointer'><h1 className="text-lg">Projects</h1></a>
          <a href="#contact" className='cursor-pointer'><h1 className="text-lg">Contact</h1></a>
          </div>
        </div>
      </div>

      {/* Backdrop + Slide Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          burgerOpen ? 'bg-black/50 backdrop-blur-sm visible' : 'invisible'
        }`}
        onClick={() => setBurgerOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[50%] h-full bg-[#121212] gap-y-5 flex flex-col justify-center items-center text-white z-50 p-6 space-y-4 shadow-xl transform transition-transform duration-500 ease-in-out ${
          burgerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a onClick={() => setBurgerOpen(false)} href="#about"><h1  className="text-lg cursor-pointer">About</h1></a>
        <a onClick={() => setBurgerOpen(false)} href="#projects"><h1 className="text-lg cursor-pointer">Projects</h1></a>
        <a onClick={() => setBurgerOpen(false)} href="#contact"><h1 className="text-lg cursor-pointer">Contact</h1></a>
      </div>
    </>
  );
}
