"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Link, Linkedin, Mail } from "lucide-react";

export default function Home() {


  return (
    <>
      <MaxWidthWrapper className="px-24 py-48">
        <h1 className="font-title text-5xl font-bold text-green-3">T0m$_</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Vercel test</p>
        <Button className="bg-purple-1 hover:bg-purple-2">Click me</Button>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="px-24 py-48" id="projects">
        <h1 className="font-title text-5xl font-bold text-green-3">Projets_</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Vercel test</p>
        <Button className="bg-purple-1 hover:bg-purple-2">Click me</Button>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-32 flex flex-col flex-wrap items-center justify-center space-y-24" id="contact">
        <h2 className="font-title text-5xl font-black text-green-3 dark:text-white">Contact<span className="text-green-1">_</span></h2>
        <div className="flex flex-row items-center justify-center space-x-24 *:space-y-2">

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
