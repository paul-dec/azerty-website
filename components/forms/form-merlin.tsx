'use client';

import { BluuNextBold, BluuNextTitling } from "@/app/fonts";
import Script from 'next/script'

export default function FormMerlin() {
  return (
    <div id="2" className="flex flex-col items-center relative w-full h-[100vh] justify-center snap-always snap-center">
      <div className="flex flex-col items-center">
        <iframe className="max-w-[500px] w-screen" data-tally-src="https://tally.so/embed/w4rvyA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" title="Azerty Auto Review"></iframe>
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            Tally.loadEmbeds();
          }}
        />
      </div>
    </div>
  )
}