import { useRouter } from 'next/router';
import { Box, Container, Text, Link, Grid } from '@components/ui'
import React from 'react'
import cn from 'classnames';
import s from '@styles/theme.module.scss'

import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillMail,
  } from 'react-icons/ai';

const Sidebar = () => {
    const { pathname } = useRouter();
    const links = [
        {
          label: 'Dashbord',
          href: '/',
          Icon: AiFillLinkedin,
        },
        {
          label: 'Authorizations',
          href: '/#blog',
          Icon: AiFillGithub,
        },
        {
          label: 'Send',
          href: '/#about',
          Icon: AiFillTwitterCircle,
        },
        {
          label: 'Receive',
          href: '/#subscribe',
          Icon: AiFillMail,
        },
        {
          label: 'Buy',
          href: 'https://docs.google.com/document/d/16-sqqDzL3SR1vomlTW6gKOKIqJ7xd_MgfJXrDLkqbnU/edit',
          Icon: AiFillLinkedin,
        },
    ];    


    const getClasses = (path: string) => {
        return cn(
          {
           'uppercase text-2xl text-blue-500' : pathname === path,  
          },
          {
           ' left-0 hover:text-3xl hover:text-green-400 transition duration-300 ease-linear hover:translate-x-2' : pathname !== path,
          },
           'flex left-0 rounded-lg  p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-green-600  cursor-pointer  '
           
        );
      };

    return (
        <Container  className={`sm:top-0 sm:left-0 sm:z-30 sm:h-full sm:w-[81px] sm:border-r sm:border-slate-300 sm:pb-5 sm:pt-3
            w-3/12 h-full shadow-2xl bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg`} >
            <Container className=" border-b py-3 mt-1 flex justify-around ">
                <p className=" text-xl font-semibold">   </p>
                <p>|</p>
                <p className="text-gray-400 text-lg">wallet</p>
            </Container>

            <div className="p-4 space-y-14  ">
                <div className="space-y-4" >
                    <Text as='h1' className="text-gray-400">Menu</Text>
    
                    {links.map(({ label, href, Icon }, idx) => (
                        <Link
                            href={href}
                            target={href.startsWith('http') ? '_blank' : '_self'}
                            className={getClasses(href)}
                        >
                            <Container as={'div'} className='sm:hidden md:hidden'>
                                {label}
                            </Container >
                            <Icon className={`h-7 lg:hidden w-12 transform text-slate-900 transition duration-300 ease-in-out hover:scale-125 hover:text-green-500 `} />
                        </Link>
                        
                    ))}

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">Delegation</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <p className="text-gray-600  " >Delegate</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <p className="text-gray-600  " > Reward</p>
                        </div>
                    </div>

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">taking    </h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <p className="text-gray-600  " >Validate</p>
                        </div>
                    </div>


                </div>
            </div>

        </Container>
    )
}

export default Sidebar