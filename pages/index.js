import Image from "next/image"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <div className="container p-6 max-w-md mx-auto bg-cyan-100 sm:max-w-xl md:max-w-2xl lg:max-w-5xl min-h-screen">
            <div>
              <h1 className="text-lg text-blue-500">
                Cari vaksin jadi mudah dengan <span className="font-bold">Lagasin</span> 
              </h1>
              <Image src="/vercel.svg" height={144} width={144} alt="Logo Lagasin"/>
              <p>Dapatkan vaksin di puskesmas terdekat dengan cepat dan akurat</p>
            </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}