const Tailwind = () => {
  return (
    <div className="container pb-20 flex flex-col">
        <header className="flex items-center px-6 py-6 justify-between">
            <a href="#" className="flex items-center gap-2 font-sans font-semibold">
                <img src="./tailwind.svg" height={32} width={32} alt="" />
                <p className="text-xl">tailwindcss</p>
            </a>
            <div className="nav flex items-center gap-6 pl-16 ml-auto">
                <a href="#" className="hover:text-sky-500 font-black text-zinc-700">Docs</a>
                <a href="#" className="hover:text-sky-500 font-black text-zinc-700">Components</a>
                <a href="#" className="hover:text-sky-500 font-black text-zinc-700">Blog</a>
                <a href="#" className="hover:text-sky-500 font-black text-zinc-700">Showcase</a>
            </div>
            <img src="./sun.svg" height={22} width={22} alt="" className="ml-8 cursor-pointer" />
            <img src="./github-logo.svg" height={20} width={20} alt="" className="ml-7" />
        </header>
        <div className="content flex flex-col">
            <h1 className="text-6xl font-extrabold text-center ml-20 max-w-5xl mt-28">Rapidly build modern websites without ever leaving your HTML.</h1>
            <p className="max-w-2xl ml-64 mr-auto text-lg mt-5">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
            <div className="flex items-center mt-8 mr-auto ml-auto gap-7">
                <button className="bg-zinc-900 text-white rounded-lg px-5 py-3 text-sm hover:bg-zinc-700">Get Started</button>
                <form className="flex items-center border-zinc-300 border-2 rounded-lg p-2 gap-2 pl-4">
                    <img src="./search.svg" height={16} width={16} alt="" className="cursor-pointer opacity-40" />
                    <input type="text" placeholder="Quick search..." />
                    <p>Ctrl K</p>
                </form>
            </div>
        </div>
        <div className="p-6 flex items-center gap-10 shadow-lg shadow-gray-400 rounded-xl max-w-3xl mt-10">
            <img src="./tailwind-hero.jpg" height={250} width={170} alt="" />
            <div className="flex flex-col">
                <h3 className="text-xl max-w-lg">“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
                </h3>
                <p className="text-sky-500 mt-10 cursor-pointer">Sarah Dayan</p>
                <p className="mt-3">Staff Engineer, Algolia</p>
            </div>
        </div>
        <div className="flex items-center mt-10 gap-20">
            <img src="./statistic.jpg" height={400} width={500} alt="" />
            <img src="./code-snapshot.png" height={400} width={500} alt="" />
        </div>

    </div>
  )
}

export default Tailwind;