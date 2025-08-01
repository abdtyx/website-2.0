import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { FaDiscord, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa';
import { LuConstruction } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";

export function HorizontalLine() {
  return (
    <div className="h-1 bg-gray-600">
    </div>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="inline"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
  );
}

export function KeywordBox({keyword}) {
  return (
    <div className={`font-noto p-2 px-4 rounded-full shadow-md ${keyword.color} w-fit`}>{keyword.text}</div>
  )
}

// https://flowbite.com/docs/components/carousel/
export function Carousel({slides, width = ""}) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000); // autoplay every 4 seconds
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className={`relative w-full ${width} h-full mx-auto overflow-hidden rounded-lg shadow-lg`}>
      {/* Image */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 w-full text-blue-600 p-4 text-center">
              <h5 className="text-lg font-semibold">{slide.title}</h5>
              <p className="text-sm">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full border-2 border-emerald-600 transition-colors ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Control buttons */}
      <button
        onClick={prev}
        className="absolute h-full left-0 top-1/2 -translate-y-1/2 hover:bg-black/30 transition-colors duration-300 text-black px-2 py-1 z-20"
        aria-label="Previous Slide"
      >
        <svg height="" width="40px" transform="rotate(180, 0, 0)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
        <path fill="currentColor" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
          c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
          C15.172,39.813,15.172,40.446,15.563,40.836z"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute h-full right-0 top-1/2 -translate-y-1/2 hover:bg-black/30 transition-colors duration-300 text-black px-2 py-1 z-20"
        aria-label="Next Slide"
      >
        <svg height="" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
        <path fill="currentColor" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
          c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
          C15.172,39.813,15.172,40.446,15.563,40.836z"/>
        </svg>
      </button>
    </div>
  );
}

// https://codesandbox.io/p/sandbox/circular-menu-t8gr9f
export function RadialMenu() {
  const icons = [FaDiscord, FaLinkedin, FaGithub, IoMdMail, LuConstruction, LuConstruction];
  const links = ["a1pha_yx", "https://www.linkedin.com/in/yuxiao-tang-34278526b/", "https://github.com/abdtyx", "a1phayxtang@gmail.com", "", ""];
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const radius = 60;
  const itemCount = icons.length;

  function iconClick(index) {
    navigator.clipboard.writeText(links[index]);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  }

  return (
    <div
      className="relative w-32 h-32 flex items-center justify-center group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      {/* Center button */}
      <button className="w-12 h-12 rounded-full border border-gray-300 bg-radial from-blue-100 to-indigo-200/30 flex items-center justify-center z-10 shadow-xl shadow-indigo-200">
        {/* react-icons logo */}
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="none" viewBox="0 0 602 602">
          <g>
            <path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"></path>
            <path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"></path>
            <path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"></path>
            <animateTransform attributeName="transform" attributeType="XML" dur="20s" from="0 301 301" repeatCount="indefinite" to="360 301 301" type="rotate"></animateTransform>
          </g>
          {/* <circle cx="301" cy="301" r="40" fill="#E91E63" /> */}
          <path fill="#E91E63" d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"></path>
        </svg>
      </button>

      {/* Menu icons */}
      {icons.map((Icon, index) => {
        const angle = (360 / itemCount) * index - 90;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <motion.button
            key={index}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
            animate={isOpen
              ? {
                  x,
                  y,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.02 * index,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                }
              : {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.2 },
                }}
            className="absolute w-10 h-10 rounded-full bg-gray-50/80 hover:bg-indigo-100/80 text-blue-500 shadow-md flex items-center justify-center"
            onClick={() => iconClick(index)}
          >
            {copiedIndex === index ? (
              <span className="text-green-500 text-xs font-bold"><FaCheck /></span>
            ) : (
              <Icon />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
