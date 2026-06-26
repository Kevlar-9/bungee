import { NavLink } from 'react-router'
import logo from '../assets/logo.png'
import SplitText from "../animate/SplitText.jsx";

function navbar() {

  return (

    <div className='bg-transparent flex p-4 w-screen items-center justify-between border-b-2 border-[#A33800]'>
      <div className='flex items-center gap-1 flex-shrink-0'>
        <img className="w-15" src={logo} alt="bungee logo" />
        <SplitText
          text="Bungee"
          className="text-3xl font-bonheur italic text-white"
          delay={50}
          duration={2.7}
          ease="elastic.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          showCallback
        />
      </div>
      <div className='text-sm text-white flex items-center flex-1 justify-center gap-8 font-hanken tracking-wider'>
        <NavLink to='/categories' className={({ isActive }) => `hover:italic transition duration-150 ${isActive ? 'underline' : ''}`}>Categories</NavLink>
        <NavLink to='/about' className={({ isActive }) => `hover:italic transition duration-150 ${isActive ? 'underline' : ''}`}>About</NavLink>
        <NavLink to='/contact' className={({ isActive }) => `hover:italic transition duration-150 ${isActive ? 'underline' : ''}`}>Contact</NavLink>
      </div>
      <div className='flex-shrink-0 flex items-center justify-center gap-4'>
        <input type="search" className='focus:outline-0 text-sm px-7 py-3 tracking-widest text-white border-b-2 italic bg-[#D9D9D9]/5 border-[#0040E0]' placeholder='Seach Insights...' />
        <button className='bg-[#0040E0] px-10 py-3 rounded-md text-sm text-white tracking-wider hover:bg-[#0040E0]/80'>Jump In</button>
      </div>
    </div>
  )
}

export default navbar