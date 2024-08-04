"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {


  return (
    <>
      <MaxWidthWrapper>
        <h1 className="font-title text-5xl font-bold text-green-3">Home</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Vercel test</p>
        <Button className="bg-purple">Click me</Button>
      </MaxWidthWrapper >
    </>
  );
}
