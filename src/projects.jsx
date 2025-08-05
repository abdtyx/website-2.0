import Layout from './components/Layout'
import * as utils from './components/Utils'
import './style.css'

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
import picVT1 from './assets/vt-1.png'
import picVT2 from './assets/vt-2.png'
import picVT3 from './assets/vt-3.png'
import picMS1 from './assets/ms-arch.png'
import picMS2 from './assets/ms-rel.png'
import picMS3 from './assets/ms-sys.png'
import pic161_1 from './assets/cs161p2-1.jpg'
import pic161_2 from './assets/cs161p2-2.jpg'
import pic161_3 from './assets/cs161p2-3.png'

function ProjectItem({project}) {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-start gap-4 p-4' id={project.name}>
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
        className='flex flex-col px-4 w-90 sm:w-170'
      >
        <h1
          className='text-2xl font-yahei font-semibold mb-1'
        >
          {project.name}
          {project.link !== "" ? <a href={project.link} className="rounded-full ms-2">
            <svg fill="#000000" width="30px" height="" viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="inline dark:text-white"><path fill="currentColor" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
          </a>
          : null}
        </h1>
        <div className='h-52 overflow-y-auto'>
          <p className='font-noto whitespace-pre-line'>{project.description}</p>
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
      name: "CatPIR (WIP)",
      description: `\
User Privacy issues have become an important concern these days. When a user makes a GET query to \
the database of a server, the server can record which entry in the database is retrieved by the user. An \
emerging technology, Private Information Retrieval (PIR), allows users to download an entry from the \
database of an untrusted server without revealing the information of which entry is being downloaded to \
the server. However, a well-known problem of current PIR implementations is the big overhead in both \
communication and computation. In practical single-server PIR schemes, state of the art solutions still \
take sublinear costs. This paper aims to offload the heavy workloads of PIR to edge computing nodes \
such as Content Delivery Network (CDN) endpoint, enhancing the horizontal scalability of the server \
while preserving privacy at the same time. We design and implement a CDN-AssisTed single-server PIR \
protocol, CatPIR, to achieve an end-to-end encrypted communication between client and server while \
distributing the PIR workloads to CDN without revealing any information about the query to either the \
CDN or the server. To evaluate the performance of our protocol, we test it on a naive PIR library which is \
built upon Microsoft SEAL library. Our experiments show CatPIR can reduce the computation workload of \
the server by 700%-1400%, and increase the total per-query time only by 0.07%. Although the network \
communication overhead remains the same, we observe the overall RTT goes down by 50% by leveraging \
the proximity of CDNs to end users. Furthermore, our protocol enables the horizontal scalability of the \
server by allowing it to leverage a large number of CDN nodes to maximize throughput.\
`,
      link: "",
      keywords: [
        {
          text: "C++",
          color: "bg-red-500",
        },
        {
          text: "Cryptography",
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
      name: "Continuous Integration Security",
      description: `\
      Deployed 10 self-hosted CI platforms (GitLab CI, Jenkins, Drone CI, etc.) on Docker/Kubernetes and analyzed vulnerabilities.
      Discovered and published GHSA-7q92-pph9-5686, CVE-2024-35046, CVE-2025-29576, and CVE-2025-45891.
      Built a MapReduce pipeline to conduct large scale analysis for > 4,000,000 GitHub repositories and found 3,828 vulnerable repositories.
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
          text: "Cloud Security",
          color: "bg-red-400",
        },
        {
          text: "Kubernetes",
          color: "bg-blue-500",
        },
      ]
    },
    {
      slides: [
        {
          image: picVT1,
          title: "Variable Tracker",
          text: "",
        },
        {
          image: picVT2,
          title: "Var Representation",
          text: "",
        },
        {
          image: picVT3,
          title: "Resolve Symbol Table",
          text: "",
        },
      ],
      name: "Variable Tracker",
      description: `\
      A runtime C/C++ program state tracker, instrumenting and inspecting Read/Write access to critical variables.\
      It uses Intel Pintool to instrument the target program and perform runtime analysis. Given the name of critical variables, \
      it calculates their virtual addresses by reading base address from MMU and adding offset from symbol table to support ASLR. \
      Various variable types, array, pointers, and nested structs \
      are supported. Variable relationship is represented as a tree structure using C++ STL in memory. \
      Multithreading program is also supported. The tool is used in research at XJTU ANTS Lab and successfully verified \
      the optimization correctness of MiddleClick (Network Function Virtualization Framework built on FastClick).\
      \
      `,
      link: "https://github.com/abdtyx/variable-tracker",
      keywords: [
        {
          text: "C++",
          color: "bg-red-500",
        },
        {
          text: "DPDK",
          color: "bg-fuchsia-800",
        },
        {
          text: "STL",
          color: "bg-red-500",
        },
      ]
    },
    {
      slides: [
        {
          image: picMS1,
          title: "Microservice Arch",
          text: "",
        },
        {
          image: picMS2,
          title: "Relationships",
          text: "",
        },
        {
          image: picMS3,
          title: "System Overview",
          text: "",
        },
      ],
      name: "XJTUANA-Microservices",
      description: `\
XJTUANA-Microservices is a microservices-based backend system in which I made contribution to the following 3 components:
    1. api-gateway handles routing and load balancing across all microservices. As the organization runs multiple servers, any service can be started on any machine. Upon startup, each microservice registers with the gateway, which then directs incoming traffic based on service availability and real-time load, ensuring both correct routing and balanced performance.
    2. api-micro-user provides CRUD operations for the user database. It supports external HTTP access and internal communication via gRPC. The service is structured in five layers: request handling (HTTP/gRPC routing), data transfer object, business logic, data access object (CRUD operations), and the underlying storage layer (database or filesystem). It also offers a Swagger (OAS3) API for external documentation and testing.
    3. api-micro-role manages user access control. It defines two relational tables—roles and relationships—to support many-to-many user-role associations.
      `,
      link: "",
      keywords: [
        {
          text: "Golang",
          color: "bg-sky-300",
        },
        {
          text: "Microservices",
          color: "bg-sky-500",
        },
        {
          text: "Docker",
          color: "bg-blue-500",
        },
      ]
    },
  ];

  const courseProjects = [
    {
      slides: [
        {
          image: "https://abdtyx.github.io/fluid-simulation/images/PositionBasedFluidsImplementation_Surfacing.gif",
          title: "",
          text: "",
        },
      ],
      name: "Particle-based Fluid Simulation",
      description: `\
      Fluid simulations are a critical component of achieving a lifelike experience in computer-generated environments, such as in movies, video games, and virtual reality. Our team utilized the Macklin et al. paper Position Based Fluids to develop our own 3D particle-based fluid simulation. Throughout the project, we received invaluable support from our professors and TAs. They aided us in tackling various challenges from algorithm implementation to performance optimization. Despite the long debugging process, this was an enjoyable project to work on. We developed programming skills, deepened our understanding of fluid dynamics, and gained experience collaborating on a large-scale software project — all skills that can be applied to future projects in computer graphics and beyond.\
      `,
      link: "https://abdtyx.github.io/fluid-simulation/",
      keywords: [
        {
          text: "C++",
          color: "bg-red-500",
        },
        {
          text: "Navier-Stokes",
          color: "bg-sky-300",
        },
        // {
        //   text: "NanoGUI",
        //   color: "bg-pink-300",
        // },
        {
          text: "Marching Cubes",
          color: "bg-amber-500",
        },
      ],
    },
    {
      slides: [
        {
          image: "https://cal-cs184-student.github.io/project-webpages-sp23-abdtyx/proj3-2/img/CBspheres_100.png",
          title: "",
          text: "",
        },
        {
          image: "https://cal-cs184-student.github.io/project-webpages-sp23-abdtyx/proj3-2/img/CBdragon_0.23_3.0.png",
          title: "",
          text: "",
        },
        {
          image: "https://cal-cs184-student.github.io/project-webpages-sp23-abdtyx/proj4/images/part5/texture.png",
          title: "",
          text: "",
        },
      ],
      name: "UC Berkeley CS184 Computer Graphics Projects",
      description: `\
      Including Rasterizer, Meshedit, Ray tracing, and Cloth Simulation.\
      `,
      link: "https://cal-cs184-student.github.io/project-webpages-sp23-abdtyx/",
      keywords: [
        {
          text: "C++",
          color: "bg-red-500",
        },
        {
          text: "NanoGUI",
          color: "bg-pink-300",
        },
        {
          text: "Ray Tracer",
          color: "bg-teal-400",
        },
      ],
    },
    {
      slides: [
        {
          image: pic161_1,
          title: "",
          text: "",
        },
        {
          image: pic161_2,
          title: "",
          text: "",
        },
        {
          image: pic161_3,
          title: "",
          text: "",
        },
      ],
      name: "UC Berkeley CS161 An End-to-End Encrypted File Sharing System",
      description: `\
This project was developed in Go as the second course project for CS161: Computer Security at the UC Berkeley. The threat model focuses on two primary adversaries: the Datastore Adversary, where data is stored on untrusted third-party platforms, and the Revoked User Adversary, where users who have had their access revoked attempt to regain access. \
Students are required to account for username/password security, multi-user support, key confidentiality, efficient file storage, file sharing, and access revocation. The implementation involves building 8 client-side APIs, designing custom data structures and communication protocols, handling serialization/deserialization via JSON, and writing comprehensive test cases. \
This project was completed individually. I wrote design documents for all major features and implemented the entire codebase—over 1,200 lines for core functionality and 800+ lines for testing. Ranked 13th out of over 400 teams on leaderboard.\
      `,
      link: "",
      keywords: [
        {
          text: "Golang",
          color: "bg-sky-300",
        },
        {
          text: "System Security",
          color: "bg-rose-400",
        },
        {
          text: "Cryptography",
          color: "bg-amber-300",
        },
      ],
    },

  ];

  return (
    <Layout content={
      <div className='pt-8 pb-8'>
        <div className="text-2xl mx-auto text-center max-w-[1500px] font-bold bg-gray-300 p-2 px-3 text-black rounded-lg shadow-lg mb-4">
          Projects
        </div>
        <div className='flex flex-col gap-4'>
          {projects.map((project, _) => <ProjectItem project={project} />)}
        </div>
        <div className="text-2xl mx-auto text-center max-w-[1500px] font-bold bg-gray-300 p-2 px-3 text-black rounded-lg shadow-lg mt-4 mb-4">
          Course Projects
        </div>
        <div className='flex flex-col gap-4'>
          {courseProjects.map((project, _) => <ProjectItem project={project} />)}
        </div>
      </div>
    } />
  );
}

export default App