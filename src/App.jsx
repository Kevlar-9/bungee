import Navbar from './components/navbar.jsx'
import './App.css'
import { div } from 'motion/react-client'

function App() {
  return (

    <div>
    <div className="relative min-h-screen w-full overflow-hidden">
      <video autoPlay muted className="absolute inset-0 h-full w-full object-cover">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_143803_f635b644-d959-4f16-9d29-cedaeb5c6de0.mp4" type="video/mp4" />
      </video>
    </div>

    <div className='absolute top-0'>
      <Navbar />
    </div>
    </div>
  )
}

export default App
