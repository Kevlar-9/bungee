import { Link } from 'react-router'
import earth from '../assets/earth.svg'
import wifi from '../assets/wifi.svg'
import share from '../assets/share.svg'

function footer() {
  return (
    <div className="flex flex-col w-full fixed bottom-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-white py-10 px-8 border-t border-[#D9D9D9]">
        <section className="flex flex-col items-start justify-start pl-2">
          <h1 className="text-[48px] text-[#0040E0] font-bonheur font-normal leading-none mb-3">Bungee</h1>
          <p className="font-hanken text-sm text-gray-600 leading-relaxed mb-1">Your direct line to high-velocity information.</p>
          <p className="font-hanken text-sm text-gray-600 leading-relaxed">We dive deep so you don't have to.</p>
        </section>
        
        <section className='flex flex-col items-start justify-start gap-3 font-hanken pl-2 md:pl-10'>
          <span className='font-bold text-sm text-[#0040E0] uppercase tracking-wider mb-1'>Navigate</span>
          <Link to='/' className='text-sm text-gray-600 hover:text-[#0040E0] transition-colors hover:opacity-70'>Home</Link>
          <Link to='/archives' className='text-sm text-[#A33800] font-bold hover:opacity-70'>Archives</Link>
          <Link to='/authors' className='text-sm text-gray-600 hover:text-[#0040E0] transition-colors hover:opacity-70'>Authors</Link>
        </section>
        
        <section className='flex flex-col items-start justify-start gap-3 font-hanken pl-2 md:pl-10'>
          <span className='font-bold text-sm text-[#0040E0] uppercase tracking-wider mb-1'>Support</span>
          <Link to='/newsletter' className='text-sm text-gray-600 hover:text-[#0040E0] transition-colors hover:opacity-70'>Newsletter</Link>
          <Link to='/help' className='text-sm text-gray-600 hover:text-[#0040E0] transition-colors hover:opacity-70'>Help Center</Link>
          <Link to='/contact' className='text-sm text-gray-600 hover:text-[#0040E0] transition-colors hover:opacity-70'>Contact</Link>
        </section>
        
        <section className='flex flex-col items-start justify-start gap-3 font-hanken pl-2'>
          <label className='font-bold text-sm text-[#0040E0] uppercase tracking-wider mb-1'>Subscribe to Momentum</label>
          <div className='flex w-full max-w-xs mt-1'>
            <input 
              type="email" 
              placeholder='Email address' 
              className='flex-1 ring-none focus:outline-none py-2 px-4 text-sm bg-[#F0EDEC] border border-r-0 border-[#D9D9D9] rounded-l-lg' 
            />
            <button className='bg-[#A33800] px-5 py-2 text-white border border-[#A33800] rounded-r-lg text-sm font-semibold hover:bg-[#A33800]/90 transition-colors'>
              JOIN
            </button>
          </div>
          <div className='flex gap-4 items-center mt-3 pl-1'>
            <img className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer' src={earth} alt="earth" />
            <img className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer' src={share} alt="share" />
            <img className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer' src={wifi} alt="wifi" />
          </div>
        </section>
      </div>
      
      <div className="bg-white w-full py-4 border-t border-[#EAEAEA] flex items-center justify-center text-xs text-gray-500 font-hanken">
        <h1>
          &copy; 2024 Bungee. A controlled descent into information. All rights reserved
        </h1>
      </div>
    </div>
  )
}

export default footer