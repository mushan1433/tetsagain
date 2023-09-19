'use client'
import Image from "next/image";
import bars from '../../../public/bars.svg'
import shape from '../../../public/shape-curve.svg'
import right from '../../../public/right.svg'

export default function Navbar() {
  return (
    <header className="w-full h-[70px] relative  text-gray-700 bg-gray-200  body-font">
      <div className="min-w-full h-full container flex flex-col items-center justify-between pr-6 pl-0 md:flex-row z-10">
        <Image src={bars} className="h-full cursor-pointer" />
        <a className="h-full flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Image src="/logo.svg" alt="logo" className="h-full w-full" width={100} height={100} />
        </a>
        <nav className="flex flex-wrap items-center justify-center pl-6 ml-3 text-base border-l border-gray-200 md:mr-auto">
          <a href="#_" className="mr-5 font-light text-lg hover:text-gray-900">
            By alices
          </a>
        </nav>
        <div className="flex items-center justify-end h-full z-10">
          <a href="#_" className="mr-8 text-sm font-semibold bg-[#FB2A63] py-2 px-3 text-white hover:text-gray-900">
            Start free trial
          </a>
          <a href="#_" className="rounded text-base font-bold text-black px-4 py-2 hover:text-gray-900 flex items-center">
            <Image src={right} className="h-5 mr-2" />
            Login
          </a>
        </div>
      </div>
      <Image src={shape} className="h-full absolute right-0 top-0" />
    </header>


  )
}
