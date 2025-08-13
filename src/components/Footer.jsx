import reactLogo from '../assets/react.svg'
import tailwindLogo from '../assets/tailwindcss.svg'

import { useEffect, useState } from 'react';

function usePageViewTracker(path) {
  const placeHolder = "loading...";
  const [viewCount, setViewCount] = useState(placeHolder);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setViewCount("error");
    }, 5000);

    fetch('/api/statcounter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('network response was not 200 ok');
        return res.json();
      })
      .then((data) => {
        if (data?.total) {
          clearTimeout(timeoutId);
          setViewCount(data.total);
        }
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        console.error('statcounter failed:', err.message);
        setViewCount("error");
      });
    return () => clearTimeout(timeoutId);
  }, [path]);

  return viewCount;
}

function ExternalLinkIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 10 100 100" width="15" height="15" className='inline'><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span className="sr-only"></span>
        </>
    );
}

export default function Footer() {
    const path = window.location.pathname;
    const viewCount = usePageViewTracker(path);
    return (
        <footer>
            <div className="bg-neutral-700 inset-shadow-md">
                <div className="flex justify-between text-center ps-0 pe-0 py-4 md:ps-12 md:pe-48 lg:ps-24 lg:pe-72 gap-2">
                    <div className="flex flex-col mt-3 items-center text-center">
                        <div className="text-lg font-bold text-neutral-50">
                            Powered by <a href="https://react.dev" className='hover:text-cyan-400 transition-colors duration-300'><img src={reactLogo} className="inline" alt="React logo" /> React</a> + <a href='https://tailwindcss.com/' className='hover:text-sky-500 transition-colors duration-300'><img src={tailwindLogo} className='inline w-10' alt='Tailwind logo' /> Tailwind CSS</a>
                            <br/>
                            Designed by Yuxiao
                        </div>
                    </div>

                    <div className="flex flex-col mt-3 items-start text-left gap-2 text-neutral-50">
                        <div className="text-lg font-bold mb-1">
                            External Links
                        </div>
                        <a href="/blog" className='hover:text-blue-400'>Blog <ExternalLinkIcon /></a>
                        <a href='https://github.com/abdtyx' className='hover:text-blue-400'>GitHub {<ExternalLinkIcon />}</a>
                        <a href='https://www.linkedin.com/in/yuxiao-tang-34278526b/' className='hover:text-blue-400'>LinkedIn {<ExternalLinkIcon />}</a>
                    </div>

                    <div className="flex flex-col mt-3 items-start text-left gap-2 text-neutral-50">
                        <p>
                            Last updated on August 13th, 2025
                        </p>
                        <p id='visitors'>
                            Visitors: {viewCount}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
