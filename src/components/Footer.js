import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = (props) => {
    const footerClasses = props.className
    return (
        <div className={`w-100 p-3 bg-gray-800 ${footerClasses || ''}`}>
            <div className='container flex flex-wrap font-medium justify-between mx-auto'>
                <div className='text-lg font-bold'>
                    Kadir's Portfolio
                    <div className='text-sm font-normal mt-2'>
                        Thank you for visiting my personal portfolio website. <br/>
                        Connect with me over socials.
                        <div className="mt-3 text-gray-400">"I am an intern who is constantly trying to improve himself."</div>
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    Quick Links
                    <div className='text-sm font-normal mt-2'>
                        <a href='/#' className='block text-blue-500 hover:text-blue-600'>
                            Home
                        </a>
                        <a href='/#aboutme' className='block text-blue-500 hover:text-blue-600'>
                            About Me
                        </a>
                        <a href='/#skills' className='block text-blue-500 hover:text-blue-600'>
                            Skills
                        </a>
                        <a href='/#contact' className='block text-blue-500 hover:text-blue-600'>
                            Contact
                        </a>
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    Contact Info
                    <div className='text-sm font-normal mt-1'>
                        <a href='mailto:encoderpie@gmail.com'>
                            <div className='items-center flex text-blue-500 hover:text-blue-400 transition-all'>
                                <FaEnvelope className='inline mr-1'/>
                                encoderpie@gmail.com
                            </div>
                        </a>
                        <div className='mt-3 flex'>
                            <a href='https://www.linkedin.com/in/encoderpie/' className="rounded-full mr-2 p-3 flex items-center w-fit bg-slate-900 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size="20" className='inline'/>
                            </a>
                            <a href='https://www.instagram.com/encoderpie/' className="rounded-full mr-2 p-3 flex items-center w-fit bg-slate-900 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size="20" className='inline'/>
                            </a>
                            <a href='https://github.com/encoderpie/' className="rounded-full p-3 mr-2 flex items-center w-fit bg-slate-900 hover:bg-blue-800 cursor-pointer transition-all" target="_blank" rel="noopener noreferrer">
                                <FaGithub size="20" className='inline'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer