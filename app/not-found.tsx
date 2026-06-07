import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="bg-[#078fcd] text-white relative overflow-hidden w-full min-h-screen flex flex-col">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-white opacity-10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative px-4 md:px-8 lg:px-14 top-0 w-full flex items-center justify-between font-geist tracking-tighter h-20 z-30">
        <div className="flex flex-1">
          <Link href="/">
            <Image src="/madewebslogo.png" alt="logo" width={80} height={80} />
          </Link>
        </div>
      </nav>

      {/* 404 Content */}
      <section className="relative z-10 px-4 md:px-8 lg:px-14 flex-1 flex flex-col justify-center items-start gap-4 md:gap-6">
        <p className="text-[1.2rem] md:text-[1.5rem] font-geist font-light text-white/40 tracking-tighter">
          404 — Page Not Found
        </p>

        <h1 className="font-light text-[3rem] md:text-[4.8rem] lg:text-[6.2rem] xl:text-[8rem] font-melody tracking-tighter leading-[3rem] md:leading-[4rem] lg:leading-[5.4rem] xl:leading-[6rem]">
          Oops, this page<br />doesn't exist.
        </h1>

        <p className="font-geist text-[1.3rem] font-light md:text-[2rem] leading-[1.4rem] md:leading-[1.8rem] md:max-w-[80%] text-white/80 mt-2">
          The page you're looking for might have been moved or no longer exists. Let's get you back on track.
        </p>

        <Link
          href="/"
          className="flex bg-white justify-center text-black p-3 px-6 text-[1rem] w-fit font-light rounded-xs mt-4 hover:bg-white/90 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-4 md:px-8 lg:px-14 pb-8 pt-10">
        <div className="flex flex-col md:flex-row w-full items-center border-t border-white/40 pt-6 text-sm text-gray-800 font-geist font-light md:max-w-[90%] lg:max-w-[80%] mx-auto">
          <p>© {new Date().getFullYear()} MadeWebs. All rights reserved.</p>
          <p>Designed with passion in India</p>
        </div>
      </footer>
    </main>
  );
}
