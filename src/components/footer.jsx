import { Link } from 'react-router'
import earth from '../assets/earth.svg'
import wifi from '../assets/wifi.svg'
import share from '../assets/share.svg'


function footer() {
  return (
    <div className="flex flex-col w-full fixed bottom-0">
      <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2  bg-white h-80 border border-[#D9D9D9]">
        <section className="flex items-center flex-col items-start justify-center pl-6 ">
          <h1 className="text-[48px] text-[#0040E0] font-bonheur font-black ">Bungee</h1>
          <p>Your direct line to high-velocity information.</p>
          <p>We dive deep so you don't have to.</p>
        </section>
        <section className='flex flex-col items-center justify-center gap-6 font-hanken'>
          <Link to='' className='hover:opacity-70 text-[#0040E0]'>Navigate</Link>
          <Link className='hover:opacity-70'>Home</Link>
          <Link to='' className='text-[#A33800] font-bold hover:opacity-70'>Archives</Link>
          <Link className='hover:opacity-70'> Authors</Link>
        </section>
        <section className='flex flex-col items-center justify-center gap-6 font-hanken'>
          <Link to='' className='text-[#0040E0] hover:opacity-70'>Support</Link>
          <Link className='hover:opacity-70'>Newsletter</Link>
          <Link className='hover:opacity-70'>Help Center</Link>
          <Link className='hover:opacity-70'>Contact</Link>
        </section>
        <section className='flex flex-col items-center justify-center gap-6 font-hanken'>
          <label className='w-full pl-15 text-[#0040E0] hover:opacity-70'>Subscribe to Momentum</label>
          <section>
            <input type="email" placeholder='Email address' className='ring-none focus:outline-none py-3 rounded-l-lg px-5 text-sm bg-[#F0EDEC]' />
            <button className='bg-[#A33800] px-8 py-3.5 text-white ring-1 ring-black rounded-r-lg text-sm'>JOIN</button>
          </section>
          <section className='flex gap-4 items-center  w-full pl-15 mt-2'>
            <img className='w-4 hover:opacity-70' src={earth} />
            <img className='w-4 hover:opacity-70' src={share} />
            <img className='w-4 hover:opacity-70' src={wifi} />
          </section>
        </section>
      </div>
      <div className="bg-white w-full p-5 flex items-center justify-center text-sm">
        <h1>
          &copy; 2024 Bungee. A controlled descent into information. All rights reserved
        </h1>
      </div>
    </div>
  )
}

export default footer