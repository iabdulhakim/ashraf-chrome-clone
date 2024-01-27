const Najot = () => {
  return (
    <div className="container">
        <header className="flex items-center py-4">
            <a href="#" className="text-2xl mr-10">Najot Ta'lim</a>
            <img src="./najot-menu.svg" height={36} width={36} alt="" className="cursor-pointer opacity-65" />
            <img src="./najot-exit.svg" height={36} width={36} alt="" className="cursor-pointer opacity-65 ml-auto" />
         </header>
         <div className="flex gap-5">
            <div className="max-w-[300px] gap-2">
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-home.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >Bosh sahifa</p>
               </a>
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-card.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >To'lovlarim</p>
               </a>
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-group.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >Guruhlarim</p>
               </a>
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-statistic.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >Ko'rsatgichlarim</p>
               </a>
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-chart.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >Reyting</p>
               </a>
               <a href="#" className="flex items-center text-lg hover:bg-[#aa8b411e] py-3 px-5 w-[250px] rounded-xl">
                   <img src="./najot-settings.svg" height={25} width={25} alt="" className="mr-7" />
                   <p className="text-[#aa8a41]" >Sozlamalar</p>
               </a>
            </div>
            <div className="bg-slate-100 w-full rounded-lg p-5">
                <h1 className="text-2xl font-bold text-zinc-800 mb-5">Kumushlar:0</h1>
                <div className="max-w-[260px] bg-white p-5 rounded-lg">
                    <h1 className="text-xl text-zinc-800 font-bold">Level: 0</h1>
                    <h2 className="text-xl text-zinc-800 font-bold">Reyting</h2>
                    <h3 className="text-lg text-zinc-800 font-bold">Frontend ReactJS (Standart) FN3: <span>38-o'rin</span></h3>
                    <h3 className="text-lg text-zinc-800 font-bold">Frontend ReactJS (Standart) FN8: <span>31-o'rin</span></h3>
                    <h3 className="text-lg text-zinc-800 font-bold">Frontend ReactJS (Standart) FN14: <span>47-o'rin</span></h3>
                </div>
                <div className=" bg-white p-7 rounded-lg w-full mt-10 flex gap-10">
                    <img src="./najot-mac.svg" height={100} width={130} alt="" />
                    <div className="">
                        <p className="mt-3">oxirgi dars:</p>
                        <h1 className="text-xl font-bold mt-4">4.1-dars JavaScriptga kirish</h1>
                        <div className="bg-[#dc854b3b] flex px-6 py-3 rounded-md mt-4 cursor-pointer gap-3">
                            <img src="./alert.svg" height={20} width={20} alt="" />
                            <p>Vazifa muddati: 17-10-2018 18:55 gacha</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>    
    </div>
  )
}

export default Najot;