import Header from '@/components/Header'
import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <head />
      <body className='overflow-x-hidden selection:bg-[#142a849f] selection:text-white'>
        <Header />
        <Navbar />
        <div className='relative'>
          {/* <div className='p-5 bg-[#000]'></div> */}
          {children}
        </div>
      </body>
    </html>
  )
}
