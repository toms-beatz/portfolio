"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Github, Link, Linkedin, Mail } from "lucide-react";
import Image from 'next/image'

export default function Home() {


  return (
    <>
      <MaxWidthWrapper className="flex flex-row justify-center w-full space-x-40 h-screen items-center">
        <Image
          src="/profile-img.jpg"
          alt='profile image'
          width={1024}
          height={1024}
          quality={100}
          className='rounded-full shadow-2xl h-72 w-72'
        />
        <div className="flex flex-col justify-start space-y-4 w-1/2">
          <h1 className="font-title text-5xl font-bold text-green-3 dark:text-green-2 uppercase">Hello W<span className="text-[2.75rem] leading-8">🌍</span>rld !</h1>
          <p className="font-body text-4xl font-normal text-green-2 dark:text-green-1">Je suis <span className="font-title font-bold text-green-3 dark:text-white">Thomas Mazeau<span className="text-green-1">_</span></span></p>
          <p>
            Je suis
            <a href="https://www.francecompetences.fr/recherche/rncp/37873/" target="_blank" className="font-body font-semibold text-green-2 dark:text-green-1 underline ml-1">Concepteur Développeur d'Applications</a>, passionné par le web et ses technologies. Je suis actuellement à la recherche d'une alternance de 2 ans dans le cadre de mon <a className="underline text-green-2 dark:text-green-1 font-semibold" href="https://ecole-ipssi.com/formations-informatique/mastere-informatique/mastere-dev-bigdata-ia/" target="_blank">Master Dev, Bigdata & Intelligence artificielle à l'IPSSI</a> pour la rentrée 2024.
          </p>
          <Button className="bg-purple-2 hover:bg-purple-2 w-1/4 dark:text-white group">
            <a href="/#projects">
              <span className="group-hover:hidden">Voir mes projets</span>
              <ArrowDown className="hidden group-hover:flex" />
            </a>
          </Button>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="px-24 py-48" id="projects">
        <h1 className="font-title text-5xl font-bold text-green-3">Projets_</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Vercel test</p>
        <Button className="bg-purple-1 hover:bg-purple-2 mx-auto">Voir mes projets</Button>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-32 flex flex-col flex-wrap items-center justify-center space-y-24" id="contact">
        <h2 className="font-title text-5xl font-black text-green-3 dark:text-white">Contact<span className="text-green-1">_</span></h2>
        <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-24 lg:space-y-0 space-y-8 !mt-16 *:space-y-2">

          <a className="flex flex-col items-center justify-center group" href="mailto:thomas.mazeau@icloud.com">
            <Mail className="w-12 h-12 stroke-1" />
            <p className="font-body text-xl font-normal text-green-2 group-hover:underline">
              Mail
            </p>
          </a>
          <a className="flex flex-col items-center justify-center group" href="https://www.linkedin.com/in/thomas-mazeau-611481204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <Linkedin className="w-12 h-12 stroke-1" />
            <p className="font-body text-xl font-normal text-green-2 group-hover:underline">
              LinkedIn
            </p>
          </a>
          <a className="flex flex-col items-center justify-center group" href="https://github.com/toms-beatz" target="_blank">
            <Github className="w-12 h-12 stroke-1" />
            <p className="font-body text-xl font-normal text-green-2 group-hover:underline">
              Github
            </p>
          </a>

        </div>
      </MaxWidthWrapper>

    </>
  );
}
