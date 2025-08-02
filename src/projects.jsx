import Layout from './components/Layout'
import * as utils from './components/Utils'
import picOptimailOverview from './assets/optimail-overview.jpeg'
import picOptimailHome from './assets/optimail-home.png'
import picOptimailUserSettings from './assets/optimail-user-settings.png'
import picCatPIROverview from './assets/catpir-overview.png'
import picPIRFHE from './assets/pir-from-fhe.png'
import picPIRIntro from './assets/pir-intro.png'
import picCIApps from './assets/ci-apps.png'
import picJenkins from './assets/jenkins.jpg'
import picGitLab from './assets/gitlab.png'
import picDrone from './assets/drone.png'

import './style.css'
import { text } from 'framer-motion/client'
import { color } from 'framer-motion'

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
        className='flex flex-col px-4 w-90 sm:w-150 '
      >
        <h1
          className='text-2xl font-yahei font-semibold mb-1'
        >
          {project.name}
          <a href={project.link} className="rounded-full ms-2">
            <svg fill="#000000" width="30px" height="" viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="inline dark:text-white"><path fill="currentColor" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
          </a>
        </h1>
        <div className='h-48 overflow-y-auto whitespace-pre-line'>
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
    {
      slides: [
        {
          image: picCatPIROverview,
          title: "CatPIR",
          text: "",
        },
        {
          image: picPIRIntro,
          title: "Why PIR",
          text: "",
        },
        {
          image: picPIRFHE,
          title: "PIR Computation",
          text: "",
        },
      ],
      name: "CatPIR (WIP, source code hidden)",
      description: `\
User Privacy issues have become an important concern these days. When a user makes a GET query to\
the database of a server, the server can record which entry in the database is retrieved by the user. An\
emerging technology, Private Information Retrieval (PIR), allows users to download an entry from the\
database of an untrusted server without revealing the information of which entry is being downloaded to\
the server. However, a well-known problem of current PIR implementations is the big overhead in both\
communication and computation. In practical single-server PIR schemes, state of the art solutions still\
take sublinear costs. This paper aims to offload the heavy workloads of PIR to edge computing nodes\
such as Content Delivery Network (CDN) endpoint, enhancing the horizontal scalability of the server\
while preserving privacy at the same time. We design and implement a CDN-AssisTed single-server PIR\
protocol, CatPIR, to achieve an end-to-end encrypted communication between client and server while\
distributing the PIR workloads to CDN without revealing any information about the query to either the\
CDN or the server. To evaluate the performance of our protocol, we test it on a naive PIR library which is\
built upon Microsoft SEAL library. Our experiments show CatPIR can reduce the computation workload of\
the server by 700%-1400%, and increase the total per-query time only by 0.07%. Although the network\
communication overhead remains the same, we observe the overall RTT goes down by 50% by leveraging\
the proximity of CDNs to end users. Furthermore, our protocol enables the horizontal scalability of the\
server by allowing it to leverage a large number of CDN nodes to maximize throughput.\
`,
      link: "",
      keywords: [
        {
          text: "C++",
          color: "bg-red-500",
        },
        {
          text: "sogou/workflow",
          color: "bg-red-500",
        },
        {
          text: "PIR",
          color: "bg-amber-500",
        },
        {
          text: "Zero-copy",
          color: "bg-green-400"
        },
      ]
    },
    {
      slides: [
        {
          image: picCIApps,
          title: "CI Applications",
          text: "",
        },
        {
          image: picJenkins,
          title: "Jenkins",
          text: "",
        },
        {
          image: picGitLab,
          title: "GitLab CI/CD",
          text: "",
        },
        {
          image: picDrone,
          title: "Drone CI",
          text: "",
        },
      ],
      name: "Vulnerable Self-Hosted CI (source code hidden)",
      description: `\
      Deployed 10 self-hosted CI platforms (GitLab CI, Jenkins, Drone CI, etc.) on Docker/Kubernetes and analyzed vulnerabilities.
      Discovered and published GHSA-7q92-pph9-5686, CVE-2024-35046, CVE-2025-29576, and CVE-2025-45891.
      Built a MapReduce pipelile to conduct large scale analysis for > 4,000,000 GitHub repositories and found 3,828 vulnerable repositories.
      `,
      link: "",
      keywords: [
        {
          text: "CI/CD",
          color: "bg-indigo-300",
        },
        {
          text: "CVE",
          color: "bg-amber-500",
        },
        {
          text: "Supply Chain Security",
          color: "bg-red-400",
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