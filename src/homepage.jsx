import Layout from "./components/Layout";
import photoSelf from "./assets/me.jpeg";
import listLogo from "./assets/listlogo.jpg";
import nuLogo from "./assets/nulogo.png";
import ucbLogo from "./assets/ucblogo.svg"
import xjtuLogo from "./assets/xjtulogo.png";
import resumeEn from "./assets/resume-en.pdf";

function HorizontalLine() {
  return (
    <div className="h-1 bg-gray-600">
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="inline"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
  );
}

function App() {
  return (
    <Layout content={
      <div className="flex justify-between">
        <div className="mx-auto bg-gray-50 px-16 pt-8">
          <div className="flex flex-col min-h-screen gap-4">
            <div className="flex justify-center gap-4 items-start">
              <img src={photoSelf} width="180" height="240" className="rounded-2xl" />
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold font-times">Yuxiao Tang</h1>
                <p className="text-2xl font-zh-name">唐雨萧</p>
                <p className="text-xl font-times mt-2">Master of Science in Computer Science</p>
                <p className="font-mono">Research Assistant</p>
                <p className="font-mono">at <a href="https://users.cs.northwestern.edu/~list/" className="hover:text-violet-900 hover:text-lg transition-all duration-200"><img src={listLogo} alt="listlogo" className="inline pe-1" width="24"></img>Northwestern LIST Lab</a></p>
                <div className="flex gap-3 mt-2">
                  <a href="/" className="text-white font-bold py-2 px-4 w-fit rounded-4xl bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    Resume-zh
                  </a>
                  <a href={resumeEn} className="text-white font-bold py-2 px-4 w-fit rounded-4xl bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    Resume-en
                  </a>
                </div>

              </div>
              <div className="bg-stone-100 rounded-2xl w-128 h-83 overflow-y-auto p-2 px-4 ml-6 flex flex-col">
                <div className="text-md mx-auto p-1 px-2 bg-gray-200 rounded-md">About me</div>
                <p className="font-noto">I am a first-year MSCS student at Northwestern University. During my undergraduate and graduate studies, I have gained extensive hands-on experience in back-end development. My previous experience includes both academic research and industrial engineering, in which I massively used Go as the dominant language, and thus not only got familiar with popular Go frameworks such as Gin, gRPC, GORM, etc, but also learned to design and implement back-end systems with Microservices architecture. Besides, I was exposed to the DevOps workflow and mastered how to manage the CI/CD system and orchestrate containers using Kubernetes. I have a strong background in C/C++ low-level development as well. My showcase projects involve 1. Program state tracker using C++, 2. Parallelizing vectorized computation with MPICH, 3. Integrating a Private Information Retrieval protocol with C++ workflow to build an out-of-the-box web service, and 4. Building a large-scale GitHub analysis pipeline using C++ MapReduce. Security and Privacy are also important concerns in my projects. I analyzed security vulnerabilities in CI tools and my findings led to three Common Vulnerabilities and Exposures IDs.</p>
              </div>
            {/* TODO: Contact me */}
            </div>
            <div className="text-2xl mx-auto font-bold bg-gray-300 p-2 px-3 text-black rounded-lg mt-2 shadow-lg">
              News
            </div>
            <div>
              <HorizontalLine />
              <div className="bg-stone-300 p-4 mx-20 rounded font-noto h-50 overflow-y-auto">
                <p>[2025/07/30] 🚧 Website v2.0 is under construction...</p>
              </div>
            </div>
            <div className="text-2xl mx-auto font-bold bg-gray-300 p-2 px-3 text-black rounded-lg mt-2 shadow-lg">
              Education Experience
            </div>
            <HorizontalLine />
            <div className="font-times">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-violet-900">
                  Northwestern University <a href="https://www.northwestern.edu/"><img src={nuLogo} alt="northwestern university logo" className="inline" width="24" /></a>
                </h1>
                <p>
                  Evanston, IL
                </p>
              </div>
              <div className="flex justify-between italic">
                <h1 className="text-xl">
                  Master of Science in Computer Science
                </h1>
                <p>
                  Sept. 2024 - Dec. 2025 (Expected)
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <h1>GPA: 3.97/4.0</h1>
                <a href="/" className="pt-1 px-1 rounded bg-emerald-300 text-violet-900 inline-block">Official Transcript</a>
              </div>
              <hr className="my-2"></hr>
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-blue-900">
                  University of California, Berkeley <a href="https://www.berkeley.edu/"><img src={ucbLogo} alt="university of california, berkeley logo" className="inline" width="24" /></a>
                </h1>
                <p>
                  Berkeley, CA
                </p>
              </div>
              <div className="flex justify-between italic">
                <h1 className="text-xl">
                  Visting Student, <a href="https://extension.berkeley.edu/international/academic/berkeley-global-access/" className="text-blue-900">Berkeley Global Access Program <ExternalLinkIcon /></a>
                </h1>
                <p>
                  Jan. 2023 - May. 2023
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <h1>GPA: 3.65/4.0</h1>
                <a href="/" className="pt-1 px-1 rounded bg-emerald-300 text-violet-900 inline-block">Official Transcript</a>
              </div>
              <hr className="my-2"></hr>
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-900 to-red-700 bg-clip-text text-transparent">
                  Xi'an Jiaotong University <a href="https://en.xjtu.edu.cn/"><img src={xjtuLogo} alt="university of california, berkeley logo" className="inline" width="24" /></a>
                </h1>
                <p>
                  Xi'an, China
                </p>
              </div>
              <div className="flex justify-between italic">
                <h1 className="text-xl">
                  Bachelor of Engineering in Computer Science, <a href="https://en.xjtu.edu.cn/2021-03/22/c_605250.htm" className="text-cyan-400">Academic Elite Program <ExternalLinkIcon /></a>
                </h1>
                <p>
                  Sept. 2020 - June. 2024
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <h1>GPA: 3.84/4.3</h1>
                <a href="/" className="pt-1 px-1 rounded bg-emerald-300 text-violet-900 inline-block">Official Transcript</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    } />
  );
}

export default App;
