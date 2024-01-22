import { BluuNextBold, BluuNextTitling } from "@/app/fonts";
import BigLogo from "../icons/bigLogo";

export default async function Header() {
  return (
    <div className="flex flex-col items-center relative w-full h-[640px] sm:h-[840px] border-b border-secondary">
      <div className="scale-75 sm:scale-100 absolute z-10 -top-6 sm:top-14 animate-pulse">
        <BigLogo />
      </div>
      <h1 className={"text-8xl sm:text-9xl mt-auto z-20 " + BluuNextTitling.className}>azerty</h1>
      <h2 className={"text-4xl sm:text-5xl text-center text-primary " + BluuNextBold.className}>Les Touches du Succès</h2>
      <p className="py-6 text-xl text-center">Nous automatisons vos taches pour<br />vous faire gagner en productivité</p>
      <div className="flex flex-col sm:flex-row mb-auto gap-4">
        <a href="#2" className="relative ml-auto bg-secondary px-8 py-2 rounded-lg	border border-primary">
          <p className="">Commencer maintenant</p>
          <span className="absolute flex h-3 w-3 top-[-4px] right-[-4px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </a>
        <a className="sm:ml-auto bg-black px-8 py-2 rounded-lg	border border-secondary shadow-shadowButton">
          <p className="text-center">En Savoir Plus</p>
        </a>
      </div>
      <div className="hidden xl:block absolute bg-secondary w-[1px] h-[920px] top-[-80px] left-special"></div>
      <div className="hidden xl:block absolute bg-secondary w-[1px] h-[920px] top-[-80px] right-special"></div>
    </div>
  )
}