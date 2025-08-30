import './style.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import Layout from './components/Layout'
import medalGold from './assets/medal-gold.png'
import medalSilver from './assets/medal-silver.png'
import medalBronze from './assets/medal-bronze.png'
import icpcLogo from './assets/icpc-logo.png'
import lanqiaoLogo from './assets/lanqiao-logo.png'

function Award({award}) {
  let [isOpen, setIsOpen] = useState(false);
  let medal, bgCol;
  switch (award.rank) {
    case 1:
      medal = medalGold;
      bgCol = "bg-amber-200";
      break;
    case 2:
      medal = medalSilver;
      bgCol = "bg-slate-200";
      break;
    case 3:
      medal = medalBronze;
      bgCol = "bg-yellow-600/50";
      break;

    default:
      break;
  };
  return (
    <button
      className={`flex justify-between ${bgCol} p-2 rounded-2xl shadow-lg border-2 border-yellow-800 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 hover:cursor-pointer`}
      type='button'
      onClick={() => setIsOpen(!isOpen)}
      >
      <div className='flex flex-col justify-start items-center text-center m-2'>
        <img src={medal} width='80' />
        <div className='font-yahei font-bold w-20 p-1'>
          {award.display}
        </div>
      </div>
      <motion.div
        className='overflow-hidden flex flex-col justify-start items-start text-start gap-1'
        initial={{ width: 0, opacity: 0 }}
        animate={isOpen ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className='font-times w-[220px] text-xl'>
          {award.date}
        </div>
        <div className='font-serif w-[220px] text-xl'>
          {award.place}
        </div>
        <div className='font-noto w-[220px]'>
          {award.description}
        </div>
      </motion.div>
    </button>
  )
}

function App() {
  let awards = [
    {
      rank: 3,
      display: <img src={icpcLogo} />,
      date: "June 2nd, 2024",
      place: "Bronze Medal (45th Place)",
      description: "The 2024 ICPC China Shaanxi Provincial Programming Contest",
    },
    {
      rank: 1,
      display: "XJTUPC 2024",
      date: "May 19th, 2024",
      place: "Gold Medal (9th Place)",
      description: "The 2023-2024 Academic Year Xi'an Jiaotong University Programming Contest",
    },
    {
      rank: 3,
      display: <img src={lanqiaoLogo} />,
      date: "June 27th, 2022",
      place: "Third Prize",
      description: "The 13th LANQIAO Cup C/C++ Group A National Final Programming Contest",
    },
    {
      rank: 1,
      display: <img src={lanqiaoLogo} />,
      date: "May 27th, 2022",
      place: "First Prize",
      description: "The 13th LANQIAO Cup C/C++ Group A Shaanxi Regional Programming Contest",
    },
    {
      rank: 2,
      display: "XJTUPC 2022",
      date: "May 15th, 2022",
      place: "Silver Medal (23rd Place)",
      description: "The 2021-2022 Academic Year Xi'an Jiaotong University Programming Contest (MINIEYE Cup)",
    }
  ]
  return <Layout content={
    <div className='flex justify-between mt-8 mb-8'>
      <div className='mx-auto flex flex-col justify-center gap-8'>
        <h1 className="text-3xl dark:text-white mx-auto font-bold bg-gray-300 dark:bg-zinc-800 p-2 px-3 rounded-lg mt-2 shadow-lg">
          My Awards Gallery
        </h1>
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {awards.map((award, idx) => (
              <Award key={idx} award={award} />
          ))}
        </div>
      </div>
    </div>
  } />
}

export default App