import { BluuNextBold, BluuNextTitling } from "@/app/fonts";
import NumberOne from "./icons/1";
import NumberTwo from "./icons/2";
import NumberThree from "./icons/3";

export default async function Slide({number, title, description}: {number: number, title: string, description: string}) {
  return (
    <div className="flex flex-col items-center relative w-full h-[100vh] justify-center">
      <div className="flex flex-col items-center">
        {number == 1 ? <NumberOne /> : number == 2 ? <NumberTwo /> : number == 3 ? <NumberThree /> : <></>}
        <h3 className="text-6xl text-center font-black uppercase mt-[-50px]">{title}</h3>
        <p className="py-6 text-xl text-center max-w-md">{description}</p>
      </div>
    </div>
  )
}