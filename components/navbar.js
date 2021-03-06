import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="bg-sky-500 fixed z-50 w-full px-8 lg:px-16 xl:px-32">
        <div className="lg:max-w-5xl lg:mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between mx-auto">
            <div className="flex items-center justify-between border-b p-4 lg:border-b-0 lg:py-0">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <Link href={"/"}>
                  <a>
                    <h3 className="uppercase text-white ml-3 font-bold">Lagasin</h3>
                  </a>
                </Link>
              </div>
              <div className="">
                <button
                  onClick={() => setShow(!show)}
                  className="block text-white focus:outline-none lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      className={!show ? "block" : "hidden"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={show ? "block" : "hidden"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={show ? "block" : "hidden"}>
              <div className="flex flex-col lg:flex-row py-3 lg:py-0">
                <Link href="/">
                  <a className="beranda block px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Beranda
                  </a>
                </Link>
                <Link href="/aplikasi">
                  <a className="aplikasi block px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Aplikasi
                  </a>
                </Link>
                <Link href="/informasi">
                  <a className="informasi block px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Informasi
                  </a>
                </Link>
              </div>
            </div>
            <div className={!show ? "flex flex-row" : "hidden"}>
              <div className="hidden p-0 lg:flex">
                <Link href="/">
                  <a className="beranda px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Beranda
                  </a>
                </Link>
                <Link href="/aplikasi">
                  <a className="aplikasi px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Aplikasi
                  </a>
                </Link>
                <Link href="/informasi">
                  <a className="informasi px-4 py-2 text-cyan-100 hover:text-white lg:py-5">
                    Informasi
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
