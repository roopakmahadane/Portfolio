import "../App.css";
import Header from "./Header";
import Cover from "./Cover";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="bg-[#121212]  font-inter text-[##ffffff]">
      <Header />
        <Cover className="min-h-screen"/>
        <AboutMe />
        <Projects />
    </div>
  );
}
