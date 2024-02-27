"use client";

import { Hero } from "@/components/Hero";
import { Race } from "@/components/Race";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [startBtn, setStartBtn] = useState(false);
  return (
    <main className="max-w-3xl mx-auto p-6">
      {startBtn ? (
        <Race />
      ) : (
        <>
          <Hero>
            <Button
              onClick={() => setStartBtn(true)}
              className="mt-6 text-xl h-12 px-10"
              size={"lg"}
            >
              Play
            </Button>
          </Hero>
        </>
      )}
    </main>
  );
}
