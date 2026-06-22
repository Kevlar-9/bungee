import {Link} from 'react-router'
import logo from '../assets/logo.png'
function navbar(){
  return (
    <div className='bg-transparent flex p-4 w-screen items-center justify-between'>
      <div className='flex items-center gap-1 w-full'>
        <img className = "w-15" src={logo} alt="bungee logo" />
        <h1 className='text-3xl font-[bonheur] italic text-white'>Bungee</h1>
      </div>
      <div className='text-sm text-white flex items-center w-full justify-evenly'>
        <Link to='' className='hover:italic transition duration-150 hover:underline'>Categories</Link>
        <Link to='' className='hover:italic transition duration-150 hover:underline'>About</Link>
        <Link to='' className='hover:italic transition duration-150 hover:underline'>Contact</Link>
      </div>
      <div className='w-full flex items-center justify-center gap-4'>
        <input type="search" className='focus:outline-0 text-sm px-7 py-3 tracking-widest text-white border-b-2 italic bg-[#D9D9D9]/5 border-[#0040E0]' placeholder='Seach Insights...'/>
        <button className='bg-[#0040E0] px-10 py-3 rounded-md text-sm text-white tracking-wider hover:bg-[#0040E0]/80'>Jump In</button>
      </div>
    </div>
  )
}

export default navbar