
'use client'
import { useRef } from "react";
import Navbar from "./components/navbar";
import Tabs from "./components/Tabs";

export default function Home() {
  const ref = useRef(null)
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main>
      <div>
        <Navbar />
        <section className="bg-gray-200 h-full">
          <div className="flex justify-between max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pr-10">
              <img
                src="./background.png"
                alt="mockup"
              />
            </div>
            <div className="place-self-center lg:col-span-7 pl-16">
              <span className="text-sm font-extrabold text-[#38E0B2] mb-1">Just launched in Kingston, UK</span>
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
                Plumber prices are crazy. Get
                your home&apos;s BANG! code to
                unlock discounted prices on
                plumbers and more.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Your home gets 1 BANG! in each category every year
                and they can be used by you or anyone you live with.
                BANG!S are designed to save your household big bucks.
              </p>
              <a
                href="#"
                className="inline-flex items-center  justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                More Info
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-[#FB2A63] border-none hover:bg-[#fb2a62dd] focus:ring-4 focus:ring-gray-100"
              >
                Tradesperson BANG!
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className=" bg-white relative pt-4 pl-10">
        <div className="absolute top-3 right-0 mt-4 bg-gray-200 h-full w-1/2 z-10">
        </div>
        <div style={{
          backgroundColor: '#112F51'
        }} className="mt-16 ml-20 relative z-20">
          <div className="grid max-w-screen-xl px-4 py-8 pl-14 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-white">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
                Goodbye £70+ an hour
                plumbers. Hello your home&apos;s
                2023 BANG! price.
              </h1>
              <p className="max-w-2xl mb-5 font-light text-white lg:mb-8 text-lg dark:text-gray-400">
                A BANG! is an exclusive price for your home. We&apos;ve
                just launched the Tradesperson BANG! so you
                cansave BIG on your next home repair job.
                <br />
                <br />
                Use your home&apos;s 2023 Tradesperson BANG! to save BIG on popular plumbing jobs
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="./background.png"
                alt="mockup"
              />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-6 text-white max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8">
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Block Toilets Sinks, Pipes and Drains
              </div>
            </div>
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Burst Pipes
              </div>
            </div>
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Floods
              </div>
            </div>
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Hot Water Problems
              </div>
            </div>
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Overflows
              </div>
            </div>
            <div className="text-center">
              <img className="inline-block mb-2" src="./circle-tick.png" />
              <div>
                Pipe Replacements
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative" ref={ref}>
        <h1 className="text-center text-3xl font-semibold text-blue-950 py-16">Your home&apos;s Tradesperson 2023 BANG!</h1>
        <Tabs handleScroll={handleScroll} />
      </section>


    </main>
  )
}
