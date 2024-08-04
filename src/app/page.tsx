"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {


  return (
    <>
      <MaxWidthWrapper>
        <h1 className="font-title text-5xl font-bold text-green-3">Home</h1>
        <p className="font-body text-xl font-normal text-green-2">Welcome to the home page</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero numquam ab unde voluptate aliquam in expedita voluptates cumque qui atque. Eveniet, error. Ratione laborum ipsam doloremque. Ipsam, fugit hic! <span className="text-green-1 underline">blabla</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit laboriosam officia? Illum consequatur amet ullam voluptate quia facere cum labore necessitatibus magnam vel odit perferendis, ut saepe excepturi hic?</p>
        <Button className="bg-purple">Click me</Button>
      </MaxWidthWrapper >
    </>
  );
}
