import './style.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import Layout from './components/Layout'
import medalGold from './assets/medal-gold.png'
import medalSilver from './assets/medal-silver.png'
import medalBronze from './assets/medal-bronze.png'
import icpcLogo from './assets/icpc-logo.png'
import lanqiaoLogo from './assets/lanqiao-logo.png'

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('awards');
  let awards = [
    {
      rank: 3,
      display: <img src={icpcLogo} />,
    },
    {
      rank: 1,
      display: "XJTUPC 2024",
    },
    {
      rank: 3,
      display: <img src={lanqiaoLogo} />,
    },
    {
      rank: 1,
      display: <img src={lanqiaoLogo} />,
    },
    {
      rank: 2,
      display: "XJTUPC 2022",
    }
  ];
  awards.forEach((award, idx) => {
    award.date = t('awards', { returnObjects: true })[idx].date;
    award.place = t('awards', { returnObjects: true })[idx].place;
    award.description = t('awards', { returnObjects: true })[idx].description;
  });
  return <Layout content={
    <div className='flex justify-between mt-8 mb-8'>
      <div className='mx-auto flex flex-col justify-center gap-8'>
        <h1 className="text-3xl dark:text-white mx-auto font-bold bg-gray-300 dark:bg-zinc-800 p-2 px-3 rounded-lg mt-2 shadow-lg">
          {t('awards-title')}
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