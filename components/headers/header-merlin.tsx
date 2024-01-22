import { BluuNextBold, BluuNextTitling } from "@/app/fonts";
import Image from "next/image"

export default async function HeaderMerlin() {
  return (
    <div id="0" className="flex flex-col relative items-center w-full h-[640px] sm:h-[840px] border-b border-secondary">
      <div className="scale-75 sm:scale-100 absolute z-10 top-[-20px] sm:top-14">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M124.533 134.804C129.662 133.667 133.667 129.662 134.804 124.533L146.793 70.5954C149.932 56.4682 170.068 56.4682 173.207 70.5954L185.196 124.533C186.333 129.662 190.338 133.667 195.467 134.804L249.405 146.793C263.532 149.932 263.532 170.068 249.405 173.207L195.467 185.196C190.338 186.333 186.333 190.338 185.196 195.467L173.207 249.405C170.068 263.532 149.932 263.532 146.793 249.405L134.804 195.467C133.667 190.338 129.662 186.333 124.533 185.196L70.5954 173.207C56.4682 170.068 56.4682 149.932 70.5954 146.793L124.533 134.804Z" fill="#4CEEF8" />
          <path d="M214.843 84.9346C216.553 84.5557 217.888 83.2206 218.267 81.511L222.263 63.5318C223.309 58.8227 230.021 58.8227 231.068 63.5318L235.064 81.511C235.443 83.2206 236.778 84.5557 238.488 84.9346L256.467 88.931C261.176 89.9774 261.176 96.6892 256.467 97.7357L238.488 101.732C236.778 102.111 235.443 103.446 235.064 105.156L231.068 123.135C230.021 127.844 223.309 127.844 222.263 123.135L218.267 105.156C217.888 103.446 216.553 102.111 214.843 101.732L196.864 97.7357C192.155 96.6892 192.155 89.9774 196.864 88.931L214.843 84.9346Z" fill="#4CEEF8" />
          <g opacity="0.3" filter="url(#filter0_f_612_8)">
            <path d="M124.533 134.804C129.662 133.667 133.667 129.662 134.804 124.533L146.793 70.5954C149.932 56.4682 170.068 56.4682 173.207 70.5954L185.196 124.533C186.333 129.662 190.338 133.667 195.467 134.804L249.405 146.793C263.532 149.932 263.532 170.068 249.405 173.207L195.467 185.196C190.338 186.333 186.333 190.338 185.196 195.467L173.207 249.405C170.068 263.532 149.932 263.532 146.793 249.405L134.804 195.467C133.667 190.338 129.662 186.333 124.533 185.196L70.5954 173.207C56.4682 170.068 56.4682 149.932 70.5954 146.793L124.533 134.804Z" fill="#4CEEF8" />
            <path d="M214.843 84.9346C216.553 84.5557 217.888 83.2206 218.267 81.511L222.263 63.5318C223.309 58.8227 230.021 58.8227 231.068 63.5318L235.064 81.511C235.443 83.2206 236.778 84.5557 238.488 84.9346L256.467 88.931C261.176 89.9774 261.176 96.6892 256.467 97.7357L238.488 101.732C236.778 102.111 235.443 103.446 235.064 105.156L231.068 123.135C230.021 127.844 223.309 127.844 222.263 123.135L218.267 105.156C217.888 103.446 216.553 102.111 214.843 101.732L196.864 97.7357C192.155 96.6892 192.155 89.9774 196.864 88.931L214.843 84.9346Z" fill="#4CEEF8" />
          </g>
          <rect x="54" y="30" width="214" height="247" fill="url(#paint0_linear_612_8)" />
          <defs>
            <filter id="filter0_f_612_8" x="0" y="0" width="320" height="320" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_612_8" />
            </filter>
            <linearGradient id="paint0_linear_612_8" x1="161" y1="30" x2="161" y2="277" gradientUnits="userSpaceOnUse">
              <stop stopColor="#04060A" stopOpacity="0" />
              <stop offset="1" stopColor="#04060A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className={"text-8xl sm:text-9xl mt-auto z-20 " + BluuNextTitling.className}>merlin</h1>
      <h2 className={"text-4xl sm:text-5xl z-20 text-center text-primary " + BluuNextBold.className}>Touchez au Génie</h2>
      <p className="py-6 text-xl text-center px-5 max-w-[550px] ">Répondre à vos commentaires Google My Business ne devrait pas vous prendre de temps</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-auto">
        <a href="https://whop.com/merlin-by-azerty" target="_blank" className="relative ml-auto bg-secondary px-8 py-2 rounded-lg	border border-primary">
          <p className="">Commencer maintenant</p>
          <span className="absolute flex h-3 w-3 top-[-4px] right-[-4px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </a>
        <a href="#more" className="sm:ml-auto bg-black px-8 py-2 rounded-lg	border border-secondary shadow-shadowButton">
          <p className="text-center">En Savoir Plus</p>
        </a>
      </div>
      {/* <Image className="mt-10 mb-auto" height={100} width={100} alt="BookMerlin" src="/book-spin.webp" objectFit="contain" /> */}
      <div className="hidden xl:block absolute bg-secondary w-[1px] h-[920px] top-[-80px] left-special"></div>
      <div className="hidden xl:block absolute bg-secondary w-[1px] h-[920px] top-[-80px] right-special"></div>
      <Image className="hidden md:block absolute top-40 -left-5 xl:left-40 -rotate-6" height={100} width={300} alt="review1" src="/review1.svg" />
      <Image className="hidden md:block absolute bottom-20 -right-5 xl:right-40 rotate-12" height={100} width={300} alt="review2" src="/review2.svg" />
      <svg className="hidden md:block absolute top-0 right-0 z-50 pointer-events-none" width="802" height="600" viewBox="0 0 802 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3" filter="url(#filter0_f_699_254)">
          <rect x="250" y="250" width="301.46" height="100" fill="#4CEEF8" />
        </g>
        <defs>
          <filter id="filter0_f_699_254" x="0" y="0" width="801.46" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_699_254" />
          </filter>
        </defs>
      </svg>
      <svg className="hidden md:block absolute bottom-0 left-0 z-50 pointer-events-none" width="802" height="600" viewBox="0 0 802 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3" filter="url(#filter0_f_699_254)">
          <rect x="250" y="250" width="301.46" height="100" fill="#4CEEF8" />
        </g>
        <defs>
          <filter id="filter0_f_699_254" x="0" y="0" width="801.46" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_699_254" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}