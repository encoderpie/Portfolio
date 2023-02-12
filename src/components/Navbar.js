import React from 'react'
import { FaGithub, FaTerminal } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    return (
        <>
            <div className='w-100 p-3 bg-gray-900'>
                <div className='container flex flex-wrap font-medium justify-between items-center mx-auto'>
                    <div className='flex'>
                        <FaTerminal size="29px"/>
                        <p className='self-center text-xl font-semibold whitespace-nowrap ml-2 dark:text-white'>Encoderpie</p>
                    </div>
                    <button className='block lg:hidden rounded-lg bg-slate-800 p-2 hover:bg-slate-800/50 transition-all'>
                        <FiMenu />
                    </button>
                    <ul className="hidden lg:flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a className="pb-4 hover:pb-2 transition-all border-b-2 hover:border-blue-300 hover:border-x-0 hover:border-t-0"
                            href="/#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white pb-4 hover:pb-2 text-gray-400 transition-all border-b-2 border-gray-600 hover:border-blue-300 hover:border-x-0 hover:border-t-0"
                            href="/#aboutme">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white pb-4 hover:pb-2 text-gray-400 transition-all border-b-2 border-gray-600 hover:border-blue-300 hover:border-x-0 hover:border-t-0"
                            href="/#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white pb-4 hover:pb-2 text-gray-400 transition-all border-b-2 border-gray-600 hover:border-blue-300 hover:border-x-0 hover:border-t-0"
                            href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <a className='flex' href='https://github.com/encoderpie' target="_blank" rel="noopener noreferrer">
                        <div className='self-center flex space-x-px text-md font-semibold whitespace-nowrap mr-2 dark:text-white'>
                            <div className="text-cyan-500">
                                Git
                            </div>
                            <div className="text-red-500 flex">
                                hub
                            </div>
                        </div>
                        <FaGithub size="23"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar