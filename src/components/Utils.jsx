import { useEffect, useState } from "react";

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
