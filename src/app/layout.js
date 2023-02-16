import './globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head />
      <body className='overflow-x-hidden selection:bg-[#142a849f] selection:text-white'>
        <Header />
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
