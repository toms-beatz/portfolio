"use client"
import MaxWidthWrapper from "./MaxWidthWrapper";
const Navbar = () => {

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 lg:bg-pWhite/80 bg-pWhite backdrop-blur-lg transition-all dark:bg-banger-blue dark:lg:bg-banger-blue/70 dark:border-banger-blue">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify- border-b border-zinc-200 dark:border-banger-blue">
                    <div className="flex items-center flex-row- justify- w-full">
                        {/* <Link
                            href="/">
                            <Image
                                src='/logolong.svg'
                                alt='Logo Banger'
                                width={125}
                                height={30}
                                quality={100}
                                className="cursor-pointer mb-1"
                            />
                        </Link> */}
                        <p className="font-title text-2xl font-bold text-green-3">Thomas Mazeau.</p>
                    </div>
                    
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

export default Navbar;