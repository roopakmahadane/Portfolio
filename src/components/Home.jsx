import "../App.css";
import Header from "./Header";
import Cover from "./Cover";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter text-gray-800">
      <Header />
        <Cover />
      
    </div>
  );
}
