import Link from 'next/link'

export default function Costom404() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a className='text-blue-500'>
        Kembali ke halaman utama.
      </a>
    </Link>
  </>
}