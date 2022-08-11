import Layout from '../components/layout'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="bg-gray-900 rounded-xl p-5 md:p-6 h-auto" id="home">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="relative">
            <div className="mb-4 pb-3 text-3xl border-b-2 border-gray-800 flex space-x-1.5">
              <div className='text-cyan-500'>Hi</div>
              <div className='text-red-500 flex'>
                there
                <div className='text-sky-500'>!</div>
              </div>
              <div>👋</div>
            </div>
            <div className="mt-1 text-3xl">I'm Kadir</div>
            <div className="mt-1 text-gray-400">
              "I am an intern who is constantly trying to improve himself."
            </div>
            <div className="md:relative lg:absolute inset-x-0 bottom-0">
              <div className="text-cyan-500 text-2xl">
                <Typewriter
                  options={{
                    strings: [
                      '> Full stack developer',
                      '> Front-end & Back-end',
                      '> Linux',        '> Python',
                      '> HTML&CSS',     '> Javascript',
                      '> Bash script',  '> Tailwind css',
                      '> Git cli',      '> ExpressJs&EJS',
                      '> NodeJs',       '> ReactJs', '> NextJs',
                      '> Bootstrap',    '> Fontawesome'
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="p-3 w-3/4 h-72 divide-y divide-slate-600 hidden md:float-left md:w-full md:block lg:float-right relative rounded bg-gray-800">
              <div>
                <div className="flex">
                  <div className="text-sky-500">~/encoderpie/details</div>
                  <div className="text-sky-700 ml-2">whoami</div>
                </div>
                <div className="ml-3 mt-1">
                  <div className="grid grid-cols-4 gap-1">
                    <div className="text-red-400">username</div>
                    <div className="col-span-3">encoderpie</div>
                    <div className="text-red-400">name</div>
                    <div className="col-span-3">Kadir</div>
                    <div className="text-red-400">country</div>
                    <div className="col-span-3">Turkey</div>
                    <div className="text-red-400">github</div>
                    <div className="col-span-3">
                      <Link href="https://github.com/encoderpie">
                        <a className="text-sky-500">github/encoderpie</a>
                      </Link>
                    </div>
                    <div className="text-red-400">using</div>
                    <div className="col-span-3">
                      Python, HTML&CSS, Javascript, Bashscript
                    </div>
                    <div className="text-red-400">os</div>
                    <div className="col-span-3">Manjaro Linux/Arch</div>
                    <div className="text-red-400">os_kernel</div>
                    <div className="col-span-3">5.15.59-1-MANJARO</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 my-2 mx-3">
                <div className="pt-1 text-sky-600">>>></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-3">
        <div className="bg-gray-900 rounded-xl mt-3 p-5 md:p-6 h-auto" id="whoami">
          <div className="mb-4 pb-3 text-3xl border-b-2 border-gray-800 flex">
            <div className='text-red-500'>Who</div>
            <div className='text-cyan-400 mx-1'>am</div>
            <div className='text-red-500'>I</div>
            <div className='text-gray-700 mx-1'>?</div>
          </div>
          <div className="mt-1 text-xl text-gray-200">
            Hello, I am Kadir, I am only 15 years old and I am an intern in a
            private company, I have been developing myself for software for 4-5 years.
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl mt-3 p-5 md:p-6 h-auto" id="contact">
          <div className="mb-4 pb-3 text-3xl border-b-2 border-gray-800 flex">
            <div className='text-sky-500'>Contact</div>
          </div>
          <div className="mt-1 text-xl text-gray-200 flex border-2 rounded-xl w-max px-4 py-2 border-sky-700">
            My discord:
            <div className="text-sky-500 mx-1">encoderpie#3312</div>
          </div>
          <div className="mt-1 text-xl text-gray-200 flex border-2 rounded-xl w-max px-4 py-2 border-sky-700">
            My instagram:
            <div className="text-sky-500 mx-1">encoderpie</div>
          </div>
        </div>
      </div>
        <div className="bg-gray-900 rounded-xl mt-3 p-5 md:p-6 h-auto" id="skills">
          <div className="mb-4 pb-3 text-3xl border-b-2 border-gray-800 flex">
            <div className='text-red-500'>Skill</div>
            <div className='text-cyan-500'>set</div>
            <div className='text-gray-700 mx-2'>~</div>
            <div className='text-sky-400'>I use</div>
          </div>
          <div className="mt-1 flex space-x-1">
            <div><Image src="/icons/js.svg"               title="Javascript"    width={50} height={50} /></div>
            <div><Image src="/icons/node-brands.svg"      title="NodeJs"        width={50} height={50} /></div>
            <div><Image src="/icons/html5-brands.svg"     title="HTML5"         width={50} height={50} /></div>
            <div><Image src="/icons/css3-brands.svg"      title="CSS3"          width={50} height={50} /></div>
            <div><Image src="/icons/git-alt-brands.svg"   title="Git cli"       width={50} height={50} /></div>
            <div><Image src="/icons/python-brands.svg"    title="Python"        width={50} height={50} /></div>
            <div><Image src="/icons/bootstrap-brands.svg" title="Bootstrap"     width={50} height={50} /></div>
            <div><Image src="/icons/terminal-solid.svg"   title="Bash/Terminal" width={50} height={50} /></div>
            <div><Image src="/icons/react-brands.svg"     title="React"         width={50} height={50} /></div>
            <div className='mt-7 text-gray-600'>and more...</div>
          </div>
      </div>
    </Layout>
  )
}
