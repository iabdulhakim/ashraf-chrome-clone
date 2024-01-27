import React from 'react'
import Top from './Top'
import Najot from './pages/Najot'
import Remix from './pages/Remix'
import Tailwind from './pages/Tailwind'

const App = () => {
  return (
    <div>
      <Top />
      <div className="container pt-[55px]">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tailwind CSS" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <Tailwind />
          </div>
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Remix Icon" checked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <Remix />
          </div>
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Najot Ta'lim" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <Najot />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default App;