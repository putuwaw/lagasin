import Link from "next/link";

export default function Costom404() {
  return (
    <>
      <div className="bg-sky-50 min-h-screen text-center flex flex-col justify-center items-center">
        <h1 className="text-sky-500 font-bold text-6xl">404</h1>
        <h3 className="text-black font-semibold mt-3">
          Maaf, website yang anda cari tidak ditemukan.
        </h3>
        <Link href="/">
          <a className="bg-sky-500 uppercase text-white w-fit p-2 rounded-md mt-3 hover:bg-sky-600 shadow-md font-bold hover:shadow-xl">
            Kembali ke beranda
          </a>
        </Link>
      </div>
    </>
  );
}