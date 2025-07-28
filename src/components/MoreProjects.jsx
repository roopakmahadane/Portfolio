import OtherProjectCard from "./OtherProjectCard"
export default function MoreProjects() {
return (
    <div className="min-h-screen bg-[#121212] mt-40 p-6 mx-auto max-w-6xl  font-inter">
    <h1 className="text-2xl font-bold align-center text-center text-[#ffffff]  mb-4 mb-10"> Others Projects</h1>
    <div className="mx-10 md:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <OtherProjectCard 
    title="Slack clone" 
    description="A real-time messaging app replicating Slack’s core features using React, Firebase, and Tailwind CSS, supporting channels, threads, and live chat functionality." 
    githubLink="https://github.com/roopakmahadane/slack-clone" 
    liveLink="https://slack-clone-3186c.web.app/"
    stack="ReactJs | Firebase | TailwindCSS"
    />
     <OtherProjectCard 
    title="Hacker News Stories" 
    description="A sleek, minimal frontend for browsing top Hacker News posts using the Hacker News API, built with React" 
    githubLink="https://github.com/roopakmahadane/HackerNews-Stories" 
    liveLink="https://hacker-news-stories-67e5.vercel.app/"
     stack="ReactJs | TailwindCSS"
    />
     <OtherProjectCard 
    title="Instagram Clone" 
    description="A social media platform clone with features like post creation, commenting, and user profiles, built with React, Firebase, and Tailwind CSS."
    stack="ReactJs | Firebase | TailwindCSS" 
    githubLink="https://github.com/roopakmahadane/slack-clone" 
    liveLink="https://instagram-clone-258f1.web.app/"
    />
    </div>
   
    </div>
)
}