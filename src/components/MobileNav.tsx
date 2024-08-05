'use client'

import { ArrowRight, CodeXml, Contact, Menu, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleOpen = () => setOpen((prev) => !prev)

    const pathname = usePathname()

    useEffect(() => {
        if (isOpen) toggleOpen()
    }, [pathname])

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            toggleOpen()
        }
    }

    return (
        <div className='sm:hidden'>
            <Menu
                onClick={toggleOpen}
                className='relative z-50 h-5 w-5 text-zinc-700'
            />

            {isOpen ? (
                <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
                    <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8 dark:bg-[#212427]'>
                        <>
                            <li className='flex flex-row space-x-4 text-purple-1 hover:text-purple-2'>
                                <User className='h-6 w-6' />
                                <Link
                                    onClick={() =>
                                        closeOnCurrent('/profile')
                                    }
                                    className='flex items-center w-full font-body font-bold text-md '
                                    href='/profile'>
                                    profil.
                                </Link>
                            </li>
                            <li className='my-3 h-px w-full bg-grey' />
                            <li className='flex flex-row space-x-4 text-purple-1 hover:text-purple-2'>
                                <CodeXml className='h-6 w-6' />
                                <Link
                                    className='flex items-center w-full font-semibold'
                                    href='/project'>
                                    projets.
                                </Link>
                            </li>
                            <li className='my-3 h-px w-full bg-grey' />
                            <li className='flex flex-row space-x-4 text-purple-1 hover:text-purple-2'>
                                <Contact className='h-6 w-6' />
                                <Link
                                    className='flex items-center w-full font-semibold'
                                    href='/contact'>
                                    contact.
                                </Link>
                            </li>
                        </>

                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default MobileNav