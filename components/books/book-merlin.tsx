import Image from "next/image"

export default async function BookMerlin() {
  return (
    <div id="book" className="bg-black relative mx-auto mt-[-50px] pb-book flex flex-col justify-center items-center gap-10">
      <Image className="mb-auto mx-auto book" width={960} height={600} alt="BookMerlin" src="/book-merlin.png" objectFit="contain" />
      <a href="https://whop.com/merlin-by-azerty" target="_blank" className="relative bg-secondary px-8 py-2 rounded-lg	border border-primary">
        <p className="">Commencer maintenant</p>
        <span className="absolute flex h-3 w-3 top-[-4px] right-[-4px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </div>
  )
}
