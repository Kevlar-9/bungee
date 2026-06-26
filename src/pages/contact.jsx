import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'


function contact() {
  return (
    <div className='bg-sky-600 h-screen'>
      <Navbar />
        <main>
              <div className='bg-red-100 flex flex-col justify-between gap-3 p-5'>
                <section>
                  <button className='text-sm bg-[#FFDBCE] rounded-4xl py-2 px-5 font-semibold text-[#370E00]'>GET IN TOUCH</button>
                </section>
                <section>
                  <h1 className='text-[#0040E0] text-[62px] font-anybody font-bold leading-[80px]'>Let's take the leap together.</h1>
                </section>
                <section>
                  <p className='text-sm leading-6'>Whether you have a burning about our latest dive into data or just <br /> want to say hi, we're here for the rebound. Friendly vibes only.</p>
                </section>
              </div>


              <div className='flex w-full justify-between p-3'>
                  <section>
                    <form className=''>
                      <div className='flex'>
                        <div className='flex flex-col'>
                          <label className='text-sm'>Your Name</label>
                          <input type="text" className="" placeholder='John Doe'/>
                        </div>
                        <div className='flex flex-col'>
                          <label className='text-sm'>Email Address</label>
                          <input type="email" className="" placeholder='john@example.com'/>
                        </div>
                      </div>

                    <div className='flex flex-col'>
                      <label className='text-sm'> What's the topic?</label>
                      <select>
                        <option value="">General Inquiry</option>
                      </select>
                    </div>

                    </form>
                  </section>
                  <section>2</section>
              </div>
        </main>
      <Footer />
    </div>
  )
}

export default contact