const Remix = () => {
  return (
    <div>
        <div className="container">
            <header className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <img src="./remixicon.png" height={32} width={32} alt="" />
                    <p className="uppercase text-xl text-zinc-700">Remix Icon</p>
                </a>
                <div className="flex items-center gap-10">
                    <a href="" className="text-lg py-2 px-4 hover:bg-slate-100 rounded-md">Request</a>
                    <a href="" className="text-lg py-2 px-4 hover:bg-slate-100 rounded-md">Support Us</a>
                    <a href="" className="text-lg py-2 px-4 hover:bg-slate-100 rounded-md">Lisense</a>
                </div>
                <div className="flex items-center gap-5">
                    <img src="./light.svg" height={20} width={20} alt="" className="cursor-pointer" />
                    <img src="./github-logo.svg"  height={20} width={20} alt="" />
                    <img src="./download.svg" height={20} width={20} alt="" className="cursor-pointer" />
                </div>
            </header>
            <div className="mt-20">
                <div>
                    <h2 className="text-4xl text-zinc-700">Simply Delightful Icon System</h2>
                    <p className="max-w-[750px] text-lg text-zinc-600 mt-5" >Open-source neutral-style system symbols elaborately crafted for designers and developers. All of the icons are free for both personal and commercial use.</p>
                    <div className="flex gap-24 mt-12">
                        <div className="flex items-center gap-3">
                            <img src="./box.svg" height={34} width={34} alt="" />
                            <p className="text-lg">Pixel Perfect</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="./circle.svg" height={34} width={34} alt="" />
                            <p className="text-lg">Vector</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="./square.svg" height={34} width={34} alt="" />
                            <p className="text-lg">Consistency</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-lg p-3 shadow-gray-400 rounded-lg flex items-center mt-16">
                <ul className="menu bg-base-200 w-56 rounded-box mr-10">
                    <li>
                      <details open>
                        <summary>All</summary>
                        <ul>
                          <li><a>Arrows</a></li>
                          <li><a>Buildings</a></li>
                          <li><a>Business</a></li>
                          <li><a>Comunication</a></li>
                          <li><a>Design</a></li>
                          <li><a>Development</a></li>
                          <li><a>Device</a></li>
                        </ul>
                      </details>
                    </li>
                </ul>
                <img src="./search.svg" height={27} width={27} alt="" className="opacity-40 mr-6"  />
                <input type="text" name="" id="" placeholder="Search 2736 icons" className="w-6/12" />
                <img src="./folder.svg" height={27} width={27} alt="" className="opacity-70 mr-6 cursor-pointer ml-auto" />
            </div>
            <div className="mt-16 pb-10">
                <h1 className="text-2xl font-bold text-zinc-700">Arrows</h1>
                <img src="./arrows.jpg" alt="" className="mt-10 " />
            </div>
        </div>
    </div>
  )
}

export default Remix;