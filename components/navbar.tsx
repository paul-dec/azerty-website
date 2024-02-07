import Badge from "./badge";
import parse from 'html-react-parser';

export default function Navbar({ name, url, price, color }: { name: string, url: string, price: string, color: string}) {
  return (
    <div className="p-2 mx-auto fixed bottom-1 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1100px] z-10 justify-between">
      <div className="flex flex-col gap-4 sm:flex-row justify-between p-4 sm:p-8 bg-[#2626264d] rounded-lg border border-[#272727] z-10 backdrop-blur-xl items-center">
        <div className="flex flex-col">
          <p className="font-bold text-lg sm:text-xl">Je veux utiliser {name}</p>
          <p className="text-base sm:text-lg opacity-80">{parse(price)}</p>
        </div>
        <a href={url} target="_blank">
          <Badge text="Commencer →" color={color} />
        </a>
      </div>
    </div>
  )
}