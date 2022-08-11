import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="p-3 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/#">
          <a className="flex items-center">
            <img
              src="/web_icons/code.png"
              className="mr-3 h-6 sm:h-10"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Encoderpie
            </span>
          </a>
        </Link>
        <div className='block md:hidden flex opacity-70 text-sm'>
          <div className='text-red-600'>{'{'}</div>
          <div className='text-cyan-600'>ENC</div>
          <div className='text-red-600'>{'}'}</div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="/#">
                <a
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#whoami">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Who am I
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#skills">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Skills
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="rounded px-3 pt-0.5 h-8 bg-blue-700">
            <Link href="/projects">
              <a className="hover:text-sky-300 text-sm">My projects</a>
            </Link>
          </div>
          <Link href="https://github.com/encoderpie">
            <a className='ml-3 mt-1'>
              <Image
                src="/icons/github-brands.svg"
                title="github/encoderpie"
                width={23}
                height={23}
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
