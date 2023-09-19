import { Tab } from '@headlessui/react'
import Link from 'next/link'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Tabs({ handleScroll }) {
    const tabs = ['BANG! Prices', 'Experts', 'How it works', 'BANG! Code']

    return (
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-white p-1  w-2/3 mx-auto">
                {tabs.map((tab, id) => {
                    return (

                        <Tab key={id} className={({ selected }) =>
                            classNames(
                                'w-full py-3 text-sm font-medium leading-5 text-gray-700',
                                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-[#FB2A63] text-white'
                                    : 'text-gray-700 hover:bg-gray-300 hover:text-white'
                            )
                        } onClick={handleScroll}>{tab}</Tab>
                    )
                })}
            </Tab.List>
            <Tab.Panels >
                <div className='relative w-full'>
                    <div className='absolute  left-0  bg-gray-200 h-full w-1/3 z-10'> </div>
                    <div className={'grid max-w-screen-xl px-4 py-16  mx-auto relative z-20 mt-8'}>
                        <Tab.Panel>
                            <div className='grid gap-12  grid-cols-2 h-full'>
                                <div>
                                    <div style={{ backgroundColor: '#112F51' }} className='py-16 pl-16'>
                                        <div className='grid gap-2 grid-cols-12'>
                                            <div className='col-span-5'>
                                                <img src="./call_team.png" alt="" srcset="" />
                                            </div>
                                            <div className='col-span-2 my-auto'>
                                                <svg
                                                    className="w-5 h-5 ml-2 -mr-1"
                                                    fill="#ffffff"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className='col-span-5'><img src="./confirm_price.png" alt="" srcset="" /></div>
                                        </div>
                                        <div className='grid gap-2 grid-cols-12 mt-12'>
                                            <div className='col-span-5'>
                                                <img src="./complete.png" alt="" srcset="" />
                                            </div>
                                            <div className='col-span-2 my-auto'>
                                                <svg
                                                    className="w-5 h-5 ml-2 -mr-1 rotate-180"
                                                    fill="#ffffff"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className='col-span-5'><img src="./book_job.png" alt="" srcset="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="place-self-center">
                                    <p className='text-xl'>
                                        Need a plumber? Well, the first price you should check is your home&apos;s 2023 BANG! price. Every year your home
                                        get&apos;s 1 Tradesperson BANG! which guarantees you an exclusive price from a local expert.
                                    </p>
                                    <Link
                                        href="/homs-tradeperson"
                                        className="inline-flex items-center mt-8  justify-center  py-3 mr-3 text-sm  font-light text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                    >
                                        Get your home&apos;s Tradesperson BANG!
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
                                    </Link>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='grid  grid-cols-2 h-full'>
                                <div>
                                    <img src="./map2.png" alt="" />
                                </div>
                                <div className="place-self-center">
                                    <p className='text-xl'>
                                        Experts at excellant prices? Yep, that&apos;s what BANG! is all about. We&apos;ve teamed up with someof the best tradespeople in your area and they&apos;re standing by to work at your home&apos;s exclusive2020 BANG! price. Ready? Book them today.
                                    </p>
                                    <Link
                                        href="/homs-tradeperson"
                                        className="inline-flex items-center mt-8  justify-center  py-3 mr-3 text-sm  font-light text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                    >
                                        Get your home&apos;s Tradesperson BANG!
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
                                    </Link>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='grid  grid-cols-2 h-full'>
                                <div>
                                    <img src="./map.png" alt="" />
                                </div>
                                <div className="place-self-center">
                                    <p className='text-xl'>
                                        Need a plumber? Well, the first price you should check is your home&apos;s 2023 BANG! price. Every year your home
                                        get&apos;s 1 Tradesperson BANG! which guarantees you an exclusive price from a local expert.
                                    </p>
                                    <Link
                                        href="/homs-tradeperson"
                                        className="inline-flex items-center mt-8  justify-center  py-3 mr-3 text-sm  font-light text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                    >
                                        Get your home&apos;s Tradesperson BANG!
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
                                    </Link>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='grid  grid-cols-2 h-full'>
                                <div>
                                    <img src="./background2.png" alt="" />
                                </div>
                                <div className="place-self-center">
                                    <p className='text-xl'>
                                        The next time you need a tradespersson just all your local team to get an estimate. We&apos;ll confirm your BANG! price and will give you your home&apos;s 2023 BANG! code once the job is booked which you can use for the rest of the year.
                                    </p>
                                    <Link
                                        href="/homs-tradeperson"
                                        className="inline-flex items-center mt-8  justify-center  py-3 mr-3 text-sm  font-light text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                                    >
                                        Get your home&apos;s Tradesperson BANG!
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
                                    </Link>
                                </div>
                            </div>
                        </Tab.Panel>
                    </div>
                </div>
            </Tab.Panels>
        </Tab.Group>
    )
}