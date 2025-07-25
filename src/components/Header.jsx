import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolldown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDown(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={
        "flex font-inter p-5 space-x-80 justify-center items-center sticky top-0 z-50 transition-colors duration-300 ease-in-out" +
        (scrolldown ? " bg-gray-800 text-white shadow-md backdrop-blur-md bg-opacity-90" : " bg-gray-100 text-black")
      }
    >
      <div>
        <h1 className="text-2xl">RM</h1>
      </div>
      <div className="flex space-x-4">
        <div><h1>About</h1></div>
        <div><h1>Projects</h1></div>
        <div><h1>Contact</h1></div>
      </div>
    </div>
  );
}
