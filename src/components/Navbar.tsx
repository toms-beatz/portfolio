"use client"
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import MobileNav from './MobileNav'
import { ArrowRight, CodeXml, Contact, User, Sun, Moon } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'

const Navbar = () => {

    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    useEffect(() => {
        const rootElement = document.documentElement;
        if (darkModeEnabled) {
            rootElement.classList.add('dark');
            rootElement.classList.remove('light');
            document.body.classList.add('dark:bg-sBlue');
            document.body.classList.remove('grainy');
        } else {
            rootElement.classList.add('light');
            rootElement.classList.remove('dark');
            document.body.classList.add('grainy');
            document.body.classList.remove('dark:bg-sBlue');
        }
    }, [darkModeEnabled]);
    const darkEnabled = (isChecked: boolean) => {
        setDarkModeEnabled(isChecked);
    };

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all dark:bg-[#212427] dark:border-0'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span className="font-title text-xl font-bold text-green-3 hidden sm:flex dark:text-white">Thomas Mazeau<span className='text-green-1'>.</span></span>
                        <span className="font-title text-xl font-bold text-green-3 sm:hidden dark:text-white">TM<span className='text-green-1'>.</span></span>
                    </Link>
                    <div className="flex justify-end items-center">
                    <div className="ml-auto mr-4"><MobileNav /></div>


                    <div className='hidden items-center space-x-4 sm:flex justify-center sm:*:text-purple-1 hover:*:text-purple-2 dark:hover:*:text-white'>
                        <>
                            <Link
                                href='/profile'
                                className={cn(buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                }), 'font-body font-bold text-md')
                                }>
                                <User className='h-5 w-5 mr-2' />
                                profil.
                            </Link>

                            <Link
                                href='/projects'
                                className={cn(buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                }), 'font-body font-bold text-md')
                                }>
                                <CodeXml className='h-5 w-5 mr-2' />
                                projets.
                            </Link>

                            <Link
                                href='/contact'
                                className={cn(buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                }), 'font-body font-bold text-md')
                                }>
                                <Contact className='h-5 w-5 mr-2' />
                                contact.
                            </Link>

                        </>
                    </div>
                    <div className="flex items-center justify-evenly ml-8">
                        <Sun color="#F0C808" fill={darkModeEnabled ? "transparent" : "#F0C808"} className="w-5 h-5" />
                        <Switch onCheckedChange={darkEnabled} className="mx-2 data-[state=checked]:bg-purple-1 data-[state=checked]:border-purple-1 data-[state=checked]:border-0 dark:[&>*]:bg-purple-2 [&>*]:ml-px" aria-label="darkmode-switch" />
                        <Moon color="#8367c7" fill={darkModeEnabled ? "#8367c7" : "transparent"} className="w-5 h-5" />
                    </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar