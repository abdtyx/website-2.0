import Layout from './components/Layout'
import * as utils from './components/Utils'
import picOptimailOverview from './assets/optimail-overview.jpeg'
import picOptimailHome from './assets/optimail-home.png'
import picOptimailUserSettings from './assets/optimail-user-settings.png'
import './style.css'

function ProjectItem({project}) {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-start gap-4 p-4'>
      <div className='flex flex-col flex-grow min-w-2xs max-w-sm sm:max-w-md h-46 sm:h-62 relative'>
        <utils.Carousel slides={project.slides} />
        <div
          className='flex flex-row justify-center mt-3 gap-3'
        >
          {project.keywords.map((keyword, _) => (
            <utils.KeywordBox
              keyword={keyword}
            />
          ))}
        </div>
      </div>
      <div
        className='flex flex-col p-2 px-4 w-90 sm:w-128 '
      >
        <h1
          className='text-2xl font-yahei font-semibold mb-2'
        >
          {project.name}
          <a href={project.link} className="rounded-full ms-2">
            <svg fill="#000000" width="30px" height="" viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="inline dark:text-white"><path fill="currentColor" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
          </a>
        </h1>
        <div className='h-48 overflow-y-auto'>
          <p className='font-noto'>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

function App() {

  const projects = [
    {
      slides: [
        {
          image: picOptimailHome,
          title: "Optimail Homepage",
          text: "",
        },
        {
          image: picOptimailOverview,
          title: "Optimail Overview",
          text: "",
        },
        {
          image: picOptimailUserSettings,
          title: "Optimail User Settings",
          text: "",
        },
      ],
      name: "Optimail",
      description: "A simple Gin server that generates summary and emphasis content for users. This project uses microservice architecture and has 3 components: mail agent, server and micro-user. Mail agent uses IMAP to receive email. Server stands as a gateway to control the API routes and dispatch requests. It uses JWT accelerate authentication. The server gets email from mail agent and call ChatGPT API to generate results. Requests regarding with user account are forwarded to micro-user by the server. Micro-user exposes gRPC APIs and uses GORM to handle DB requests.",
      link: "https://github.com/abdtyx/Optimail",
      keywords: [
        {
          text: "Golang",
          color: "bg-sky-300",
        },
        {
          text: "Gin",
          color: "bg-blue-400",
        },
        {
          text: "GORM",
          color: "bg-sky-400",
        },
        {
          text: "gRPC",
          color: "bg-teal-200/50",
        },
      ]
    },
  ];

  return (
    <Layout content={
      <div className='pt-8'>
        <div className='flex flex-col gap-4'>
          {projects.map((project, _) => <ProjectItem project={project} />)}
        </div>
      </div>
    } />
  );
}

export default App