import Link from 'next/link'

export default function Costom404() {
  return <>
  <div className='bg-white min-h-screen text-center flex flex-col justify-center items-center'>
    <h1 className='text-blue-600 font-bold text-6xl'>404</h1>
    <h3 className='text-blue-500 font-semibold mt-3'>Maaf, website yang anda cari tidak ditemukan.</h3>
    <Link href="/">
      <a className='bg-blue-500 uppercase text-white w-fit p-2 rounded-md mt-3 hover:bg-blue-600 shadow-xl'>
        Kembali ke beranda
      </a>
    </Link>
  </div>
  </>
}