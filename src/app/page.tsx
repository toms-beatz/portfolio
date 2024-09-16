"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Eye, FileText, Github, Globe, Hammer, Link, Linkedin, Mail } from "lucide-react";
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: 'Kouiz mobile',
    description: 'Application mobile pour Kouiz. Permet aux utilisateurs de répondre aux Kouizzes depuis leur téléphone. Fonctionne sur Android et iOS.',
    image: '/kouiz-mobile.png',
    // public_link: 'https://www.google.com',
    github_link: 'https://www.github.com/toms-beatz/kouiz-mobile',
    technologies: ['React', 'Expo', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'Kouiz web',
    description: 'Interface web de Kouiz, application de quiz en ligne.',
    image: '/kouiz.png',
    // public_link: 'https://www.kouiz.fr',
    github_link: 'https://www.github.com/toms-beatz/kouiz',
    technologies: ['React', 'NextJs', 'TailwindCSS', 'Laravel', 'MariaDB', 'Docker', 'Traefik']
  },
  {
    id: 3,
    title: 'Kouiz Desktop',
    description: 'Application desktop pour Kouiz. Permet aux admins de gérer les utilisateurs et les Kouizzes depuis leur ordinateur.',
    image: '/kouiz-desktop.png',
    // public_link: 'https://www.google.com',
    github_link: 'https://www.github.com/toms-beatz/kouiz-desktop',
    technologies: ['React', 'NextJS', 'Electron', 'TailwindCSS']
  },

  {
    id: 4,
    title: 'Banger',
    description: 'Site vitrine de Banger, une application simplifiant la planification de soirées. Projet d\'école',
    image: '/banger.png',
    public_link: 'https://www.bangerevent.live',
    github_link: 'https://www.github.com/toms-beatz/banger',
    technologies: ['React', 'NextJs', 'TailwindCSS']
  },
  {
    id: 5,
    title: 'Portfolio Thomasgram',
    description: 'Mon ancien portfolio, qui est un clone d\'Instagram.',
    image: '/thomasgram.png',
    public_link: 'https://archive.thomas-mazeau.com',
    github_link: 'https://www.github.com/toms-beatz/portfolio-thomasgram',
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 6,
    title: 'English Game',
    description: 'Projet d\'école en anglais. LE but était de créer un jeu de société en anglais. Cette application sert à choisir un Game Master au hasard, ainsi qu\'une marque et un brief.',
    image: '/englishgame.png',
    // public_link: 'https://www.google.com',
    github_link: 'https://www.github.com/toms-beatz/english-game-web',
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 7,
    title: 'Caramblagues',
    description: 'Première utilisation d\'une API externe. Application de blagues en ligne.',
    image: '/caramblagues.png',
    // public_link: 'https://www.google.com',
    github_link: 'https://www.github.com/toms-beatz/caramblagues',
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS']
  },
]

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
          <h1 className="font-title lg:text-5xl text-3xl font-bold text-green-3 dark:text-green-1 uppercase">Hello W<span className="text-[1.5rem] lg:text-[2.25rem] leading-8">🌍</span>rld !</h1>
          <p className="font-body text-2xl font-normal text-green-2 dark:text-green-1">Je suis <span className="font-title font-bold text-green-3 dark:text-white">Thomas Mazeau<span className="text-green-1">_</span></span></p>
          <p className="font-body">
            Je suis
            <a href="https://www.francecompetences.fr/recherche/rncp/37873/" target="_blank" className="font-body font-semibold text-green-2 dark:text-green-1 hover:underline ml-1">Concepteur Développeur d&apos;Applications</a>, passionné par le web et ses technologies. Je suis actuellement à la recherche d&apos;une alternance de 2 ans dans le cadre de mon <a className="hover:underline text-green-2 dark:text-green-1 font-semibold" href="https://ecole-ipssi.com/formations-informatique/mastere-informatique/mastere-dev-bigdata-ia/" target="_blank">Master Dev, Bigdata & Intelligence artificielle à l&apos;IPSSI</a> pour la rentrée 2024.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <Button className="bg-purple-2 hover:bg-purple-1 dark:text-white w-full lg:w-fit">
              <a className="flex flex-row items-center space-x-4" href="/#projects">
                <Hammer className="" />
                <span className="">Voir mes projets</span>
              </a>
            </Button>
            <Button className="bg-purple-2 hover:bg-purple-1 dark:text-white">
              <a className="flex flex-row items-center space-x-4" href="/CV_Thomas_MAZEAU_Alternance.pdf" download="CV_Thomas_MAZEAU">
                <FileText className="" />
                <span className="">Télécharger mon CV</span>
              </a>
            </Button>
          </div>

        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col justify-evenly w-full h-screen items-center" id="projects">
        <h2 className="font-title text-5xl font-black text-green-3 dark:text-white">Projets<span className="text-green-1">_</span></h2>
        <Carousel
          className="lg:w-1/2 w-full pt-8"
        >
          <CarouselContent>
            {projects.map(project => (
              <CarouselItem key={project.id}>
                <Card className="border dark:bg-white dark:rounded-md dark:border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={2879}
                    height={1570}
                    quality={100}
                    className='rounded-lg w-full h-full object-cover'
                  />
                  <CardContent className="">
                    <div className="flex flex-row items-center gap-8 justify-between pt-8">
                      <h3 className="font-title text-3xl font-bold text-green-3">{project.title}</h3>
                      <div className="flex flex-row gap-3 flex-wrap">
                        {project.technologies?.map((tech, index) => (
                          <>
                            <Image
                              key={index}
                              src={`/${tech.toLowerCase()}.png`}
                              alt='profile image'
                              width={50}
                              height={50}
                              quality={100}
                              className=' h-6 w-6'
                              title={tech}
                            />
                          </>
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-lg font-normal text-green-2 dark:text-green-1 py-8">{project.description}</p>
                    <div className="flex flex-row gap-4">
                      {project.public_link && (
                        <Button className="bg-purple-2 hover:bg-purple-1 dark:text-white">
                          <a href={project.public_link} target="_blank" className="flex flex-row items-center space-x-4">
                            <Globe className="" />
                            <span className="">Voir le projet</span>
                          </a>
                        </Button>
                      )}
                      <Button className="bg-purple-2 hover:bg-purple-1 dark:text-white">
                        <a href={project.github_link} target="_blank" className="flex flex-row items-center space-x-4">
                          <Github className="" />
                          <span className="">Voir le code</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

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
