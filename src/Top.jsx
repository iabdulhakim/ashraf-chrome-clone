const Top = () => {
  return (
    <div className="top-wrapper bg-zinc-700 w-full p-2 fixed">
        <div className="container flex gap-4 px-4x">
            <img className="cursor-pointer" src="./arrow-left-line.svg" height={20} width={20} alt="" />
            <img className="cursor-pointer opacity-50" src="./arrow-right-line.svg" height={20} width={20} alt="" />
            <img className="cursor-pointer" src="./restart.svg" height={20} width={20} alt="" />
            <img className="cursor-pointer" src="./home.svg" height={20} width={20} alt="" />
            <div className="bg-zinc-900 px-3 py-2 w-full rounded-3xl flex items-center">
              <img src="./lock.svg" height={16} width={16} alt="" className="mr-2" />
              <p className="text-white text-sm">google.com</p>
              <p className="text-gray-500"></p>
              <img src="./star.svg" height={15} width={15} alt="" className="opacity-50 ml-auto cursor-pointer" />
            </div>
            <h3 className="bg-orange-600 text-white px-3 rounded-full text-sm pt-2 cursor-pointer">IA</h3>
            <img src="./more.svg" alt="" height={20} width={20} className="cursor-pointer" />
        </div>
    </div>
  )
}

export default Top;