import Layout from "./components/Layout";
import maoyou1 from "./assets/maoyou1.jpg"
import maoyou2 from "./assets/maoyou2.jpg"
import maoyou3 from "./assets/maoyou3.jpg"

function App() {
  return (
    <Layout content={
      <div
        className="flex justify-between"
      >
        <div
          className="mx-auto px-4 sm:px-16 pt-8"
        >
          <div
            className="flex flex-col items-center gap-4"
          >
            <h1 className="text-3xl font-semibold">MEET MY CAT MAOYOU!!!</h1>
            <div
              className="flex flex-col lg:flex-row bg-gray-50">
                <img src={maoyou1} alt="Cat Maoyou photo1" className="p-1 w-80" />
                <img src={maoyou2} alt="Cat Maoyou photo2" className="p-1 w-80" />
                <img src={maoyou3} alt="Cat Maoyou photo3" className="p-1 w-80" />
            </div>
          </div>
        </div>
      </div>
    } />
  )
}

export default App;
