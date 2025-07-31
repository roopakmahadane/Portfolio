import "../App.css";
import Header from "./Header";
import Cover from "./Cover";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import MoreProjects from "./MoreProjects";
import Connect from "./Connect";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-[#121212]  font-inter text-[#ffffff]">
      <Header />
        <Cover className="min-h-screen"/>
        <AboutMe />
        <Projects />
        <MoreProjects />
        <Connect />
        <Footer />
    </div>
  );
}
