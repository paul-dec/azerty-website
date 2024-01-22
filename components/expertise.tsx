import { BluuNextBold, BluuNextTitling } from "@/app/fonts";
import BigLogo from "./icons/bigLogo";
import ExpertiseLogo from "./icons/expertiseLogo";

export default async function ExpertiseSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="scale-75 sm:scale-100 relative my-32">
        <div className="absolute z-10 top-[-40px] left-1/2 -translate-x-1/2">
          <ExpertiseLogo />
        </div>
        <h1 className="relative z-20 text-5xl uppercase font-black">Notre&nbsp;expertise</h1>
      </div>
      <div className="max-w-[90vw] w-[1360px] h-[700px] mb-[50px] bg-green-500 sticky top-[10vh]"></div>
      <div className="max-w-[90vw] w-[1360px] h-[700px] mb-[50px] bg-white sticky top-[10vh]"></div>
      <div className="max-w-[90vw] w-[1360px] h-[700px] mb-[50px] bg-green-500 sticky top-[10vh]"></div>
      <div className="max-w-[90vw] w-[1360px] h-[700px] mb-[50px] bg-white sticky top-[10vh]"></div>
      <div className="max-w-[90vw] w-[1360px] h-[700px] mb-[50px] bg-green-500 sticky top-[10vh]"></div>
    </div>
  )
}