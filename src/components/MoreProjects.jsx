import OtherProjectCard from "./OtherProjectCard"
export default function MoreProjects() {
return (
    <div className="min-h-screen bg-[#121212] p-6 mx-auto max-w-6xl  font-inter">
    <h1 className="text-3xl font-bold align-center text-center text-[#ffffff] md:text-left mb-4 mb-10"> Others Projects</h1>
    <div className="mx-10 md:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <OtherProjectCard 
    title="Slack clone" 
    description="A real-time messaging app replicating Slack’s core features using React, Firebase, and Tailwind CSS, supporting channels, threads, and live chat functionality." 
    githubLink="https://github.com/roopakmahadane/slack-clone" 
    liveLink="https://slack-clone-3186c.web.app/"
    stack="ReactJs | Firebase | TailwindCSS"
    />
     <OtherProjectCard 
    title="Slack clone" 
    description="Created a clone of slack where user can signup and view the channel and its groups" 
    githubLink="https://github.com/roopakmahadane/HackerNews-Stories" 
    liveLink="https://slack-clone-3186c.web.app/"
    />
     <OtherProjectCard 
    title="Slack clone" 
    description="Created a clone of slack where user can signup and view the channel and its groups" 
    githubLink="https://github.com/roopakmahadane/slack-clone" 
    liveLink="https://slack-clone-3186c.web.app/"
    />
    </div>
   
    </div>
)
}