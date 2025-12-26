import learn from "../assets/learn.svg"

const Hero = () => {
  return (
    <section className="md:h-sp1 flex flex-col md:flex-row items-center gap-12 bg-white px-6 md:px-16 py-16 md:py-24">
      
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learn Skills That Shape Your Future
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          procourse is an online learning platform designed to help you master
          in-demand skills, build real projects, and grow your career with confidence.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-medium hover:opacity-90 transition cursor-pointer">
            Explore Courses
          </button>

          <button className="px-6 py-3 rounded-xl border-2 border-purple-700 text-purple-700 font-medium hover:bg-purple-700 hover:text-white transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div className="md:w-1/2">
        <img
          src={learn}
          alt="Learning illustration"
          className="w-full h-auto"
        />
      </div>

    </section>
  )
}

export default Hero
