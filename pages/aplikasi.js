import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Aplikasi() {
    return (
        <>
            <Navbar/>
                <div className="container p-6 max-w-md mx-auto bg-cyan-100 sm:max-w-xl md:max-w-2xl lg:max-w-5xl min-h-screen">
                    <h1 className="font-bold text-3xl">Aplikasi</h1>
                    <p>Ini adalah informasi mengenai aplikasi.</p>
                </div>
            <Footer/>
        </>
    );
}