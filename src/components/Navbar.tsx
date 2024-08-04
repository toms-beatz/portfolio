import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import MobileNav from './MobileNav'
import { ArrowRight, CodeXml, Contact, User } from 'lucide-react'
import { cn } from "@/lib/utils";

const Navbar = () => {


    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span className="font-title text-xl font-bold text-green-3">Thomas Mazeau.</span>
                    </Link>

                    <MobileNav />

                    <div className='hidden items-center space-x-4 sm:flex justify-center *:text-purple-1 hover:*:text-purple-2'>
                        <>
                            <Link
                                href='/'
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
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar