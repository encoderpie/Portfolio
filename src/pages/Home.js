import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import Particles from "particles.js";
import ParticlesConfig from '../ParticlesConfig';
import 
    {
        FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaBootstrap, FaTerminal, FaGitAlt,
        FaHeadset, FaPaperPlane, FaUser, FaDiscord, FaLaptopCode, FaLinkedinIn, FaInstagram, FaAngleDown
    } from 'react-icons/fa'
import { SiCsharp, SiGnubash, SiHeroku, SiJquery, SiLinux, SiMongodb, SiMysql, SiSocketdotio, SiSqlite, SiStackoverflow, SiTailwindcss, SiVercel } from 'react-icons/si'
import { AiFillMessage } from 'react-icons/ai'
import { BiText } from 'react-icons/bi'
import { Card, CardHeader, CardMain } from '../components/Card'
import SkillCard from '../components/SkillCard';
import Footer from '../components/Footer';

const Home = () => {
    const [ contactSubject, setContactSubject ] = useState('')
    const [ contactBody, setContactBody ] = useState('')
    const typeWriterOptions = {
        strings: [
            '> Full stack developer',
            '> Front-end & Back-end',
            '> Linux', '> JavaScript',
            '> Python', '> C#',
            '> NodeJs', '> ReactJS',
            '> Jquery', '> ExpressJs & EJS',
            '> HTML5 & CSS3', '> Bootstrap',
            '> Tailwindcss', '> Github & Git',
            '> Bash & Terminal', '> Mongodb & Mysql',
            '> Sqlite', '> Socket.IO', '> Heroku', '> Vercel',
            '> Stackoverflow'
        ],
        autoStart: true,
        delay: 80,
        pauseFor: 500,
        deleteSpeed: 50,
        loop: true
    }
    useEffect(() => {
        window.particlesJS("particles-js", ParticlesConfig)
    }, [])
    return (
        <div style={{ position: 'relative', overflow: "hidden" }}>
            <div id="particles-js" className='bg-gradient-to-bl from-blue-900 via-black to-blue-800' style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
            <div className='container mx-auto pt-5 relative'>
                <div className="grid grid-rows-1 grid-flow-col gap-4 py-36">
                    <div className='font-bold text-4xl px-5 mx-auto py-24'>
                        <div className="text-blue-400 flex space-x-1.5">
                            <div className="text-cyan-500">Hi</div>
                            <div className="text-red-500 flex">
                                There
                                <div className="text-sky-500">!</div>
                            </div>
                            <div>👋</div>
                        </div>
                        <div className="mt-1 text-blue-400 flex space-x-1.5">
                            <div className="text-cyan-500">
                                I'm
                            </div>
                            <div className="text-red-500">
                                Kadir
                            </div>
                            <div className="text-yellow-500">
                                Colak
                            </div>
                        </div>
                        <div className="mt-1 text-gray-400 text-base">
                            "I am an intern who is constantly trying to improve himself."
                        </div>
                        <div className="text-cyan-500 text-2xl my-2">
                            <Typewriter options={typeWriterOptions} />
                        </div>
                        <a href='/#aboutme' className='rounded-3xl px-5 py-3.5 text-sm bg-blue-700 hover:bg-blue-800 transition-all'>
                            About Me <FaAngleDown className="inline"/>
                        </a>
                        <br/>
                        <div className='mt-5 flex'>
                            <a href='https://www.linkedin.com/in/encoderpie/' className="rounded-full mr-2 p-3 flex items-center w-fit bg-slate-800 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size="20" className='inline'/>
                            </a>
                            <a href='https://www.instagram.com/encoderpie/' className="rounded-full mr-2 p-3 flex items-center w-fit bg-slate-800 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size="20" className='inline'/>
                            </a>
                            <a href='https://github.com/encoderpie/' className="rounded-full p-3 mr-2 flex items-center w-fit bg-slate-800 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaGithub size="20" className='inline'/>
                            </a>
                        </div>
                    </div>
                    <div className='mx-auto hidden xl:block'>
                        <img src='/man.png' width="700px" alt='Man'/>
                    </div>
                </div>
            </div>
            
            
            
            <Card className='relative bg-gray-900' id='aboutme'>
                <CardHeader className='space-x-2'>
                    <FaUser className="inline mb-1 mr-0.5 text-slate-300"/>
                    <span className="text-red-500">About</span>
                    <span className="text-blue-500">Me</span>
                </CardHeader>
                <CardMain>
                    <div className='block xl:flex'>
                        <div className="w-100 my-5 xl:my-0 xl:w-1/2 xl:mr-3 flex items-center">
                            <div style={{marginTop: "-15px"}}>                            
                                <p className='space-x-1 font-bold text-2xl'>
                                    <span className='text-blue-500'>Who</span>
                                    <span className='text-red-500'>Am</span>
                                    <span className='text-cyan-500'>
                                        I
                                        <span className='text-yellow-500'>?</span>
                                    </span>
                                </p>
                                <p className='text-sm text-slate-400'>
                                    <span className='text-slate-500 mr-1'>~</span>
                                    <span>Brief Information</span>
                                </p>
                                <p className='mt-3'>
                                    As a <span className='text-red-400'>Turkey</span>-based
                                    <span className='text-blue-500 ml-1'>Full</span>-<span className='text-yellow-500'>Stack</span> Developer,
                                    my passion for coding and website development drives me.
                                    I have an average of 5 years of software background. Although I am a high school student,
                                    I am constantly looking for opportunities to develop my career, skills and gain valuable experience.
                                    I am currently working in a private company and trying to improve myself in the field of software
                                    development.
                                    <div className='mt-1'></div>
                                    My focus lies primarily in web development, where I dedicate myself to developing my skills and
                                    providing cutting-edge solutions to meet the ever-evolving needs of clients.
                                </p>
                            </div>
                        </div>
                        <div className="w-100 xl:w-1/2 xl:ml-3 py-2 px-2.5 bg-slate-800 rounded-xl">
                            <span className='text-blue-400'>~/encoderpie/details</span>
                            <span className='text-slate-200'>$</span>
                            <span className='ml-2 text-slate-500'>whoami</span>
                            <span className='mr-1 float-right text-slate-400 text-2xl' style={{marginTop: "-4px"}}>- ×</span>
                            <div className="container mx-auto px-2 py-1">
                                <div className="grid grid-cols-2 gap-1">
                                    <div className='text-red-500'>username</div>
                                    <div>encoderpie</div>
                                    <div className='text-red-500'>name</div>
                                    <div>Kadir</div>
                                    <div className='text-red-500'>country</div>
                                    <div>🇹🇷 Turkey</div>
                                    <div className='text-red-500'>os</div>
                                    <div>Ubuntu 22.04.1</div>
                                    <div className='text-red-500 font-bold'>social</div>
                                    <div></div>
                                    <div className='text-red-500'>github</div>
                                    <a href='https://github.com/encoderpie/' className='text-blue-400' target="_blank" rel="noopener noreferrer">
                                        github/encoderpie
                                    </a>
                                    <div className='text-red-500'>linkedin</div>
                                    <a href='https://www.linkedin.com/in/encoderpie/' className='text-blue-400' target="_blank" rel="noopener noreferrer">
                                        linkedin/encoderpie
                                    </a>
                                    <div className='text-red-500'>instagram</div>
                                    <a href='https://www.instagram.com/encoderpie/' className='text-blue-400' target="_blank" rel="noopener noreferrer">
                                        instagram/encoderpie
                                    </a>
                                </div>
                            </div>
                            <span className='text-blue-400'>~/encoderpie/details</span>
                            <span className='text-slate-200'>$</span>
                            <span className='ml-2 text-slate-500'>enjoy your work</span>
                        </div>
                    </div>
                </CardMain>
            </Card>



            <Card className='relative bg-gray-800' id='skills'>
                <CardHeader className='space-x-2 bg-slate-900'>
                    <FaLaptopCode className="inline mb-1 mr-0.5 text-slate-300"/>
                    <span className="text-red-500">Skills</span>
                    <span className="text-slate-500">~</span>
                    <span className="text-blue-500">Abilities</span>
                </CardHeader>
                <CardMain>
                    <div className='rounded-2xl bg-slate-900 p-3 mx-auto' id='skills'>
                        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-11 gap-2.5">
                            <SkillCard>
                                <FaJsSquare size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>JavaScript</span>
                            </SkillCard>
                            <SkillCard>
                                <FaPython size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Python</span>
                            </SkillCard>
                            <SkillCard>
                                <SiCsharp size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>C#</span>
                            </SkillCard>
                            <SkillCard>
                                <SiLinux size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Linux</span>
                            </SkillCard>
                            <SkillCard>
                                <FaReact size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>ReactJS</span>
                            </SkillCard>
                            <SkillCard>
                                <FaNodeJs size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>NodeJs</span>
                            </SkillCard>
                            <SkillCard>
                                <FaHtml5 size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>HTML5</span>
                            </SkillCard>
                            <SkillCard>
                                <FaCss3Alt size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>CSS3</span>
                            </SkillCard>
                            <SkillCard>
                                <FaBootstrap size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Bootstrap</span>
                            </SkillCard>
                            <SkillCard>
                                <SiTailwindcss size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Tailwindcss</span>
                            </SkillCard>
                            <SkillCard>
                                <FaGithub size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Github</span>
                            </SkillCard>
                            <SkillCard>
                                <FaGitAlt size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Git</span>
                            </SkillCard>
                            <SkillCard>
                                <SiGnubash size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Bash</span>
                            </SkillCard>
                            <SkillCard>
                                <FaTerminal size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Terminal</span>
                            </SkillCard>
                            <SkillCard>
                                <SiMongodb size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Mongodb</span>
                            </SkillCard>
                            <SkillCard>
                                <SiMysql size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Mysql</span>
                            </SkillCard>
                            <SkillCard>
                                <SiHeroku size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Heroku</span>
                            </SkillCard>
                            <SkillCard>
                                <SiVercel size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Vercel</span>
                            </SkillCard>
                            <SkillCard>
                                <SiSqlite size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Sqlite</span>
                            </SkillCard>
                            <SkillCard>
                                <SiSocketdotio size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Socket.IO</span>
                            </SkillCard>
                            <SkillCard>
                                <SiStackoverflow size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Stackoverflow</span>
                            </SkillCard>
                            <SkillCard>
                                <SiJquery size="50" className='mx-auto' color='cyan' />
                                <span className='skillCardText'>Jquery</span>
                            </SkillCard>
                        </div>
                    </div>
                </CardMain>
            </Card>



            <Card className='relative bg-gray-900' id='contact'>
                <CardHeader className='space-x-2'>
                    <FaHeadset className='text-xl inline mb-1 mr-0.5 text-slate-300'/>
                    <span className="text-red-500">
                        Cont
                        <span className="text-blue-500">act</span>
                    </span>
                </CardHeader>
                <CardMain>
                    <div className='block xl:flex w-100 container'>
                        <div className="w-100 xl:w-1/2 mr-2 bg-slate-800 rounded-xl flex">
                            <div className='w-1/2'>
                                <img src='/contact.png' className='mx-auto' width="310px" alt='Contact'/>
                            </div>
                            <div className='p-4 w-1/2'>
                                <form>
                                    <div className="relative mb-4">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BiText size='20' className="mb-1 inline mt-1 text-slate-400"/>
                                        </div>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Subject" onChange={e => setContactSubject(e.target.value)}/>
                                    </div>
                                    <div className="relative mb-4">
                                        <div className="absolute inset-y-0 left-0 flex pl-3 pointer-events-none">
                                            <AiFillMessage className="mb-1 inline mt-3 text-slate-400"/>
                                        </div>
                                        <textarea rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder='Message' onChange={e => setContactBody(e.target.value)}></textarea>
                                    </div>
                                    <a href={`mailto:encoderpie@gmail.com?subject=${contactSubject}&body=${contactBody}`} className='rounded-xl float-right px-5 py-3 text-sm bg-blue-700 hover:bg-blue-800 transition-all'>
                                        Submit <FaPaperPlane className="ml-1 mb-1 inline"/>
                                    </a>
                                </form>
                            </div>
                        </div>
                        <div className="mt-2 xl:mt-0 xl:ml-2 bg-slate-800 rounded-xl px-5 py-4 h-min w-fit">
                            <span className='mr-2'><FaDiscord className="inline mb-1 text-lg"/></span>
                            <span className='text-red-500'>Dis</span>
                            <span className='text-blue-500'>cord: </span>
                            <span className='text-yellow-300'>encoderpie</span>
                            <span className='text-slate-500'>#</span>
                            <span className='text-red-500'>3312</span>
                        </div>
                    </div>
                </CardMain>
            </Card>
            <Footer className='relative'/>
        </div>
    )
}

export default Home