import Layout from "./components/Layout";
import maoyou1 from "./assets/maoyou1.jpg"
import maoyou2 from "./assets/maoyou2.jpg"
import maoyou3 from "./assets/maoyou3.jpg"

function App() {
  return (
    <Layout content={
      <div
        className="flex justify-between dark:text-white"
      >
        <div
          className="mx-auto px-4 sm:px-16 pt-8 pb-8"
        >
          <div
            className="flex flex-col items-center gap-4"
          >
            <h1 className="text-3xl dark:text-white mx-auto font-bold bg-gray-300 dark:bg-zinc-800 p-2 px-3 rounded-lg mt-2 shadow-lg">
              Miscellaneous
            </h1>
            <h1 className="text-3xl font-semibold">MEET MY CAT MAOYOU!!!</h1>
            <div
              className="flex flex-col lg:flex-row bg-gray-50">
                <img src={maoyou1} alt="Cat Maoyou photo1" className="p-1 w-80" />
                <img src={maoyou2} alt="Cat Maoyou photo2" className="p-1 w-80" />
                <img src={maoyou3} alt="Cat Maoyou photo3" className="p-1 w-80" />
            </div>
            <h1 className="text-3xl font-semibold">Evanston Chinese Restaurant Recommendation</h1>
            <div className="flex flex-col font-mono w-fit lg:w-200 gap-1">
                <p>
                  <b>Shang Noodles (4⭐)</b>: Authentic, Chinese staff, highly recommended. Dishes listed on the "Authentic Menu" are authentic Chinese food.
                </p>
                <p>
                  <b>Peppercorns Kitchen (3⭐)</b>: mid authentic, decent, recommended. Fried rice buy 1 get 1 free. Dry Pot Chicken is goat, the skin of the chicken thigh is dry and crispy.
                </p>
                <p>
                  <b>Chengdu Impression (5⭐)</b>: Authentic, Chinese staff, strongly recommended. No American Chinese food, all foods are authentic Sichuan Cuisines, the best Chinese restaurant you can find around Evanston. Be prepared, the food is very spicy.
                </p>
            </div>
          </div>
        </div>
      </div>
    } />
  )
}

export default App;
