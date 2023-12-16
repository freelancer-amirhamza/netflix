import { BsFillPlayCircleFill } from "react-icons/bs"


function Hero() {
  return (
    <div className="relative">
        <img className="rounded-xl max-h-[400px] w-full md:mx-4 object-cover" src="https://www.snexplores.org/wp-content/uploads/2023/03/1440_TF_Baymax_feat.jpg" loading="lazy" alt="" />
        <div className="absolute md:top-12 md:left-12  top-5 left-5">
            <h1 className="md:text-6xl text-4xl font-bold cursor-pointer text-gray-700 ">Baymax 2.0!</h1>
            <button className="flex items-center border-2 shadow-md border-red-400 bg-red-500 p-3 text-white rounded-lg mt-10 gap-3 text-2xl" > <BsFillPlayCircleFill/> Watch Now</button>
        </div>
    </div>
  )
}

export default Hero