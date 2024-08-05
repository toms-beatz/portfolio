"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Github, Link, Linkedin, Mail } from "lucide-react";
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


export default function Home() {


  return (
    <>
      <MaxWidthWrapper className="flex lg:flex-row flex-col justify-center lg:w-full lg:space-x-40 h-screen items-center lg:space-y-0 space-y-8">
        <Image
          src="/profile-img.jpg"
          alt='profile image'
          width={1024}
          height={1024}
          quality={100}
          className='rounded-full shadow-2xl lg:h-72 lg:w-72 h-36 w-36'
        />
        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center lg:space-y-8 space-y-4 lg:w-1/2 w-5/6">
          <h1 className="font-title lg:text-5xl text-3xl font-bold text-green-3 dark:text-green-2 uppercase">Hello W<span className="text-[1.5rem] lg:text-[2.25rem] leading-8">🌍</span>rld !</h1>
          <p className="font-body text-2xl font-normal text-green-2 dark:text-green-1">Je suis <span className="font-title font-bold text-green-3 dark:text-white">Thomas Mazeau<span className="text-green-1">_</span></span></p>
          <p>
            Je suis
            <a href="https://www.francecompetences.fr/recherche/rncp/37873/" target="_blank" className="font-body font-semibold text-green-2 dark:text-green-1 underline ml-1">Concepteur Développeur d&apos;Applications</a>, passionné par le web et ses technologies. Je suis actuellement à la recherche d&apos;une alternance de 2 ans dans le cadre de mon <a className="underline text-green-2 dark:text-green-1 font-semibold" href="https://ecole-ipssi.com/formations-informatique/mastere-informatique/mastere-dev-bigdata-ia/" target="_blank">Master Dev, Bigdata & Intelligence artificielle à l&apos;IPSSI</a> pour la rentrée 2024.
          </p>
          <Button className="bg-purple-2 hover:bg-purple-2 lg:w-1/4 dark:text-white group">
            <a href="/#projects">
              <span className="group-hover:hidden">Voir mes projets</span>
              <ArrowDown className="hidden group-hover:flex" />
            </a>
          </Button>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col justify-center w-full space-y-8 h-screen items-center" id="projects">
        <h2 className="font-title text-5xl font-black text-green-3 dark:text-white">Projets<span className="text-green-1">_</span></h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-1/2"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button className="bg-purple-2 hover:bg-purple-2 lg:w-1/6 dark:text-white group">
            <a href="/projects">
              <span className="group-hover:hidden">Voir tous mes projets</span>
              <ArrowRight className="hidden group-hover:flex" />
            </a>
          </Button>

      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col justify-center w-full h-screen items-center" id="contact">
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
