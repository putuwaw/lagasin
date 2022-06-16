import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Informasi() {
  return (
    <>
      <Head>
        <title>Lagasin - Informasi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <style jsx global>{`
        .informasi {
          color: white;
          font-weight: 700;
        }
        .beranda {
          font-weight: 400;
          --tw-text-opacity: 1;
          color: rgb(207 250 254 / var(--tw-text-opacity));
        }
        .aplikasi {
          font-weight: 400;
          --tw-text-opacity: 1;
          color: rgb(207 250 254 / var(--tw-text-opacity));
        }
      `}</style>
      <Navbar />
      <div className="bg-sky-50 mx-auto lg:px-16 xl:px-32 lg:max-w-7xl">
        {/* hero section */}
        <div className="pt-24 min-h-screen px-8">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center text-black font-extrabold mb-3 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
          >
            <h3>
              Tentang <span className="text-sky-500">Lagasin</span>
            </h3>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center lg:flex-row lg:mt-10"
          >
            <div className="flex justify-center items-center lg:w-1/2">
              <div className="z-10">
                <Image
                  src="/images/peopleinfo.svg"
                  alt="People"
                  width={290}
                  height={290}
                />
              </div>
              <div className="absolute z-0">
                <Image
                  src="/images/blob3.svg"
                  alt="Blob"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="text-center pt-4 lg:w-1/2 lg:text-justify">
              <p>
                Lagasin dibuat untuk memenuhi tugas Mata Kuliah Matematika Diskrit 2.
                Lagasin adalah akronim dari &apos;Langsung Dapat Vaksin&apos;.
                Kata &apos;lagas&apos; sendiri dalam Bahasa Bali memiliki arti tidak ragu.
                Diharapkan dengan hadirnya aplikasi ini, orang-orang akan semakin mudah dan tidak ragu untuk mendapatkan vaksin.
              </p>
            </div>
          </div>
        </div>
        {/* end of hero section */}
        {/* tech section */}
        <div className="lg:h-96 lg:mb-10 px-8 pt-16">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center text-black font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-10"
          >
            <h3>
              Teknologi <span className="text-sky-500">Lagasin</span>
            </h3>
          </div>
          <div className="flex items-center justify-center pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div
                data-aos="fade-up"
                className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="text-white z-10 text-opacity-0 hover:text-opacity-100 hover:font-bold absolute hover:bg-slate-600 hover:bg-opacity-90 w-28 h-28 rounded-full flex items-center justify-center duration-300">
                  <h3 className="">Tailwind CSS</h3>
                </div>
                <Image
                  src="/images/tailwind_css_logo.svg"
                  alt="Logo Tailwind"
                  className="w-5/6 z-0"
                  width={80}
                  height={80}
                />
              </div>
              <div
                data-aos="fade-up"
                className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="text-white z-10 text-opacity-0 hover:text-opacity-100 hover:font-bold absolute hover:bg-slate-600 hover:bg-opacity-90 w-28 h-28 rounded-full flex items-center justify-center duration-300">
                  <h3 className="">Next JS</h3>
                </div>
                <Image
                  src="/images/next_js_logo.svg"
                  alt="Logo Tailwind"
                  className="w-5/6 z-0"
                  width={80}
                  height={80}
                />
              </div>
              <div
                data-aos="fade-up"
                className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="text-white z-10 text-opacity-0 hover:text-opacity-100 hover:font-bold absolute hover:bg-slate-600 hover:bg-opacity-90 w-28 h-28 rounded-full flex items-center justify-center duration-300">
                  <h3 className="">NPM</h3>
                </div>
                <Image
                  src="/images/npm_logo.svg"
                  alt="Logo Tailwind"
                  className="w-5/6 z-0"
                  width={80}
                  height={80}
                />
              </div>
              <div
                data-aos="fade-up"
                className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="text-white z-10 text-opacity-0 hover:text-opacity-100 hover:font-bold absolute hover:bg-slate-600 hover:bg-opacity-90 w-28 h-28 rounded-full flex items-center justify-center duration-300">
                  <h3 className="">VS Code</h3>
                </div>
                <Image
                  src="/images/vs_code_logo.svg"
                  alt="Logo Tailwind"
                  className="w-3/5 z-0"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of tech section */}
        {/* documentation */}
        <div className="min-h-screen px-8 pt-20 pb-10">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center text-black font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-10"
          >
            <h3>
              Dokumentasi <span className="text-sky-500">Lagasin</span>
            </h3>
          </div>
          {/* source code */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-start lg:flex-row "
          >
            <div className="w-1/3 flex justify-center items-center">
              <Image
                className="rounded-full w-1/2"
                src="/images/github_logo.svg"
                alt="Logo Github"
                width={180}
                height={180}
              />
            </div>
            <div className="lg:w-1/3 pt-4 lg:pt-0 text-center lg:text-left">
              <h3 className="text-center lg:text-left font-bold text-lg">
                Source Code
              </h3>
              <p>
                Source code dari program ini secara keseluruhan dapat dilihat
                langsung{" "}
                <a
                  className="font-bold underline text-sky-500"
                  href="https://github.com/putuwaw/lagasin"
                >
                  disini
                </a>
                .
              </p>
            </div>
          </div>
          {/* laporan */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-start lg:flex-row-reverse mt-4 lg:mt-0"
          >
            <div className="w-1/3 flex justify-center items-center pt-4 lg:pt-0">
              <Image
                className="rounded-full w-1/2"
                src="/images/drive_logo.svg"
                alt="Logo Github"
                width={125}
                height={125}
              />
            </div>
            <div className="lg:w-1/3 pt-4 lg:pt-0 text-center lg:text-right">
              <h3 className="text-center lg:text-right font-bold text-lg">
                Laporan
              </h3>
              <p>
                Laporan dari penerapan algoritma Floyd-Warshall ini dapat
                dilihat langsung{" "}
                <a
                  className="font-bold underline text-sky-500"
                  href="https://drive.google.com/file/d/1C9i_QqjPBhEl1hpK1jLysl5hkgI1yGhh/view?usp=sharing"
                >
                  disini
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* end of documentation */}
      </div>
      <Footer />
    </>
  );
}
