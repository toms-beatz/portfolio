"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {


  return (
    <>
      <MaxWidthWrapper className="px-24 py-48">
        <h1 className="font-title text-5xl font-bold text-green-3">T0m$_</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Vercel test</p>
        <Button className="bg-purple-1 hover:bg-purple-2">Click me</Button>
      </MaxWidthWrapper >
    </>
  );
}
