"use client";

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect } from 'react';

const ParisTime = dynamic(() => import('./components/parisTime'), { ssr: false })

export default function Home() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
  
    const handleScroll = () => {
      if (navbar && header) {
        const headerBottom = header.offsetTop + header.offsetHeight;
        if (window.scrollY >= headerBottom) {
          navbar.classList.remove('-translate-y-[100px]');
          navbar.classList.add('translate-y-0');
        } else {
          navbar.classList.remove('translate-y-0');
          navbar.classList.add('-translate-y-[100px]');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main className="flex flex-col items-center">
      <div id="navbar" className="fixed flex flex-row justify-between w-[calc(100%-1rem)] max-w-xl m-2 px-10 py-4 bg-black rounded-full z-10 transition-all duration-300 ease-in-out -translate-y-[100px] bg-[url('../public/image/background.png')] bg-cover bg-center shadow-navbar">
        <a href='/'>
          <svg className="h-[40px] cursor-pointer" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 37.0498L30.7 0.299805H24.2L19 37.0498H25.5Z" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <path d="M15.5 37.0498L20.7 0.299805H14.2L9 37.0498H15.5Z" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <rect y="9" width="6" height="6" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <rect y="25" width="6" height="6" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
          </svg>
        </a>
        <div className="flex flex-row gap-5 items-center">
          <a href="#work" className="text-xl transition-colors duration-300 hover:text-[#17D449]">Réalisations</a>
          <a href="mailto:hello@azerty.app" className="text-xl transition-colors duration-300 hover:text-[#17D449]">Contact</a>
        </div>
      </div>
      <div id="header" className="relative flex pt-40 min-h-[0px] md:pt-0 md:min-h-[800px] h-full w-full flex-col justify-end bg-black bg-[url('../public/image/background.png')] bg-cover bg-center py-10 px-10 md:px-20 gap-5">
      <div className="top-0 left-0 absolute flex flex-row justify-between px-10 md:px-20 py-4 w-full z-10">
        <a href='/'>
          <svg className="h-[40px] cursor-pointer" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 37.0498L30.7 0.299805H24.2L19 37.0498H25.5Z" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <path d="M15.5 37.0498L20.7 0.299805H14.2L9 37.0498H15.5Z" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <rect y="9" width="6" height="6" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
            <rect y="25" width="6" height="6" className="fill-[#17D449] hover:fill-white cursor-pointer"/>
          </svg>
        </a>
        <div className="flex flex-row gap-5 items-center">
          <a href="#work" className="text-xl transition-colors duration-300 hover:text-[#17D449]">Réalisations</a>
          <a href="mailto:hello@azerty.app" className="text-xl transition-colors duration-300 hover:text-[#17D449]">Contact</a>
        </div>
      </div>
        <svg className="w-full md:w-auto md:h-36 self-start" viewBox="0 0 132 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.95 0.249999L47.1 37H40.6L40.3 33.95H35.85L35.5 37H29L34.2 0.249999H41.95ZM36.45 28.55H39.7L38.2 15.25H37.9L36.45 28.55ZM63.0512 1.2L61.6512 6.2L55.1012 29.5H62.6512V37H48.0512V29.55V29.5L54.6012 6.2H48.4512V0.299999L48.5012 0.249999H63.0512V1.2ZM77.7285 6.55H68.5285L70.7785 8.65V14.15H76.2285V19.3L73.6285 21.85H70.7785V30.4H77.7285V37H64.2785V0.249999H77.7285V6.55ZM89.9688 0.249999C92.7188 0.249999 94.9688 2.5 94.9688 5.25V11.95C94.9688 12.15 94.9688 12.35 94.9188 12.55C94.8688 12.85 94.8188 13.15 94.7188 13.4C94.2688 14.95 93.0688 16.15 91.5188 16.65C93.5188 17.3 94.9688 19.2 94.9688 21.4V37H88.4688V23.1L86.1688 20.9L85.7688 21.25V37H79.2688V6.75V0.249999H89.9688ZM88.4688 12.85V7.1C88.4688 6.25 87.7688 5.6 86.9188 5.6H83.8688L85.7688 7.35V15.45L86.1688 15.05L88.4688 12.85ZM111.795 0.249999V7.05H106.995V37H100.545V7.05H95.7445V0.249999H111.795ZM124.365 0.249999H131.215L125.115 21.55V37H118.665V20.5L112.765 0.249999H119.665L122.015 15.9L124.365 0.249999Z" fill="white"/>
          <path d="M25.5 37.0498L30.7 0.299805H24.2L19 37.0498H25.5Z" fill="#17D449"/>
          <path d="M15.5 37.0498L20.7 0.299805H14.2L9 37.0498H15.5Z" fill="#17D449"/>
          <rect y="9" width="6" height="6" fill="#17D449"/>
          <rect y="25" width="6" height="6" fill="#17D449"/>
        </svg>
        <svg className="w-full md:w-auto md:h-20 self-start" viewBox="0 0 363 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.35 29.3V37H0.0500001V0.249999H6.55V29.3H12.35ZM26.0613 0.249999L31.2113 37H24.7113L24.4113 33.95H19.9613L19.6113 37H13.1113L18.3113 0.249999H26.0613ZM20.5613 28.55H23.8113L22.3113 15.25H22.0113L20.5613 28.55ZM56.743 0.249999H64.243V37H57.743V19.4L56.143 28.8H52.243L50.593 19.35V37H44.093V0.249999H51.593L54.193 17.85L56.743 0.249999ZM79.9063 6.55H70.7063L72.9563 8.65V14.15H78.4063V19.3L75.8063 21.85H72.9563V30.4H79.9063V37H66.4563V0.249999H79.9063V6.55ZM83.4465 0.249999H87.8965V37H81.3965V2.55C81.9965 1.85 82.7965 0.949999 83.4465 0.249999ZM102.389 29.3V37H90.0891V0.249999H96.5891V29.3H102.389ZM115.621 29.3V37H103.321V0.249999H109.821V29.3H115.621ZM130.004 6.55H120.804L123.054 8.65V14.15H128.504V19.3L125.904 21.85H123.054V30.4H130.004V37H116.554V0.249999H130.004V6.55ZM141.044 0.299999H147.544V37H142.394V35.1C141.844 35.95 141.094 36.65 140.144 37H136.494C136.394 37 136.294 37 136.194 37C133.594 36.85 131.494 34.7 131.494 32.05V0.299999H137.994V27.65C137.994 28.45 138.694 29.15 139.494 29.15C140.344 29.15 141.044 28.45 141.044 27.65V0.299999ZM160.457 0.249999C163.207 0.249999 165.457 2.5 165.457 5.25V11.95C165.457 12.15 165.457 12.35 165.407 12.55C165.357 12.85 165.307 13.15 165.207 13.4C164.757 14.95 163.557 16.15 162.007 16.65C164.007 17.3 165.457 19.2 165.457 21.4V37H158.957V23.1L156.657 20.9L156.257 21.25V37H149.757V6.75V0.249999H160.457ZM158.957 12.85V7.1C158.957 6.25 158.257 5.6 157.407 5.6H154.357L156.257 7.35V15.45L156.657 15.05L158.957 12.85ZM180.883 6.55H171.683L173.933 8.65V14.15H179.383V19.3L176.783 21.85H173.933V30.4H180.883V37H167.433V0.249999H180.883V6.55ZM206.042 0.249999L211.192 37H204.692L204.392 33.95H199.942L199.592 37H193.092L198.292 0.249999H206.042ZM200.542 28.55H203.792L202.292 15.25H201.992L200.542 28.55ZM228.155 13.5H222.255V7.25C222.255 6.55 221.655 5.95 220.955 5.95H217.055L218.555 7.2C218.555 7.25 218.555 7.25 218.555 7.25V28.9C218.555 29.6 219.105 30.2 219.855 30.2H220.955C221.655 30.2 222.255 29.6 222.255 28.9V21.8H220.555V19.8L222.255 17.7L223.205 16.55H228.155V36.35H225.505L224.605 33.65C224.455 34.3 224.105 34.85 223.655 35.3C223.105 35.85 222.455 36.3 221.705 36.6C221.605 36.6 221.505 36.65 221.405 36.7C220.855 36.85 220.255 37 219.655 37C219.555 37 219.405 37 219.255 37C219.155 37 219.005 37 218.855 37H217.605C217.455 37 217.355 37 217.255 37C217.155 37 217.055 37 216.905 37C216.855 37 216.755 37 216.655 37C216.555 37 216.405 36.95 216.305 36.95C214.005 36.5 212.255 34.45 212.255 32.05V5.1C212.255 2.75 213.855 0.799998 216.055 0.249999C216.105 0.199997 216.205 0.199997 216.305 0.199997C216.605 0.0999982 216.955 0.0999982 217.255 0.0999982H223.205C223.355 0.0999982 223.505 0.0999982 223.655 0.0999982C223.905 0.149998 224.155 0.199997 224.405 0.249999C226.555 0.799998 228.155 2.75 228.155 5.1V13.5ZM243.725 6.55H234.525L236.775 8.65V14.15H242.225V19.3L239.625 21.85H236.775V30.4H243.725V37H230.275V0.249999H243.725V6.55ZM255.465 0.249999H261.965V37H255.465L251.765 19.45V37H245.265V0.249999H252.115L255.465 16.7V0.249999ZM279.961 14.35H273.611V7.6C273.611 6.9 273.061 6.35 272.361 6.35H271.761H268.861L270.561 7.85V29C270.561 29.65 271.111 30.2 271.761 30.2H272.361C273.061 30.2 273.611 29.65 273.611 29V21.3L279.961 17.6V32.05C279.961 34.6 278.061 36.7 275.561 37C275.511 37 275.461 37 275.461 37H275.311C275.211 37 275.111 37 275.011 37C274.861 37 274.761 37 274.661 37H269.411C269.261 37 269.161 37 269.061 37C268.961 37 268.861 37 268.711 37C268.661 37 268.561 37 268.461 37C268.361 37 268.211 36.95 268.111 36.95C265.811 36.5 264.061 34.45 264.061 32.05V5.1C264.061 2.75 265.661 0.799998 267.861 0.249999C267.911 0.199997 268.011 0.199997 268.111 0.199997C268.411 0.0999982 268.761 0.0999982 269.061 0.0999982H275.011C275.161 0.0999982 275.311 0.0999982 275.461 0.0999982C275.711 0.149998 275.961 0.199997 276.211 0.249999C278.361 0.799998 279.961 2.75 279.961 5.1V14.35ZM295.482 6.55H286.282L288.532 8.65V14.15H293.982V19.3L291.382 21.85H288.532V30.4H295.482V37H282.032V0.249999H295.482V6.55ZM328.891 37H322.391L318.841 19.45L315.241 37H308.741V0.249999H315.241V17.95L317.241 8.5H320.291L322.391 17.9V0.249999H328.891V37ZM344.555 6.55H335.355L337.605 8.65V14.15H343.055V19.3L340.455 21.85H337.605V30.4H344.555V37H331.105V0.249999H344.555V6.55ZM355.945 29.85V21.55C355.145 20.75 353.395 18.95 352.945 18.45H352.895V31.05H354.745C355.395 31.05 355.945 30.55 355.945 29.85ZM362.795 11.4C362.795 11.45 362.795 11.5 362.795 11.55C362.795 13.4 361.895 15.05 360.445 16C360.095 16.25 359.695 16.45 359.245 16.6C359.695 16.75 360.095 16.95 360.445 17.2C361.045 17.6 361.545 18.1 361.895 18.7C362.295 19.3 362.595 19.95 362.745 20.7C362.795 21 362.795 21.35 362.795 21.7V31.65C362.795 33.5 361.895 35.15 360.445 36.1C359.995 36.4 359.545 36.6 359.045 36.8C358.495 36.95 357.995 37 357.445 37H346.095V0.249999H357.445C358.545 0.249999 359.595 0.599998 360.445 1.2C361.895 2.15 362.795 3.8 362.795 5.65V11.25C362.795 11.3 362.795 11.35 362.795 11.4ZM355.945 12.55V7.6C355.945 6.95 355.395 6.4 354.745 6.4H350.595L352.895 8.2V14.35L355.945 12.55Z" fill="white"/>
        </svg>
      </div>
      <video poster='image/beyond.jpg' className="flex min-h-[400px] md:min-h-[700px] md:max-h-[900px] h-full w-full object-cover" playsInline autoPlay loop muted>
        <source src="video/showreel.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-20 h-full w-full bg-red-black py-20 md:py-32 px-10 md:px-20">
        <p className="flex font-extrabold text-3xl md:text-7xl max-w-6xl">Azerty est un studio de création et de développement de sites web et d&apos;applications.</p>
        <p className="flex font-extrabold text-3xl md:text-7xl max-w-6xl">Fondé en 2023, nous avons acquis une réputation pour la création d&apos;expériences web.</p>
      </div>
      <div id="work" className="flex flex-col md:grid md:grid-cols-10 h-full w-full py-10 px-10 md:px-20 gap-x-10 gap-y-20">
  <div className="md:col-start-3 md:col-end-[-1] flex flex-col group">
    <div className="overflow-hidden">
      <Image
        className='h-full w-full border-solid border-1 border-white transition-transform duration-300 group-hover:scale-110'
        src="/image/beyond.jpg"
        width={1920}
        height={1080}
        alt="Beyond project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>BEYOND Media</p>
    <p className='opacity-50'>Agence de publicité sur les réseaux sociaux</p>
  </div>
  
  <div className="md:col-start-1 md:col-end-[-5] flex flex-col group">
    <div className="overflow-hidden">
      <Image
        className='h-full w-full transition-transform duration-300 group-hover:scale-110'
        src="/image/futures.jpg"
        width={1920}
        height={1080}
        alt="Futures project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>Futures</p>
    <p className='opacity-50'>Agence de publicité sur les réseaux sociaux</p>
  </div>
  
  <div className="md:col-start-7 md:col-end-[-1] flex flex-col group">
    <div className="overflow-hidden h-full">
      <Image
        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
        src="/image/focus.jpg"
        width={1920}
        height={1080}
        alt="Focus project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>Focus</p>
    <p className='opacity-50'>Agence de création de vidéos publicitaires / social media</p>
  </div>
  
  <div className="md:col-start-2 md:col-end-[-2] flex flex-col group">
    <div className="overflow-hidden h-full">
      <Image
        className='h-full w-full transition-transform duration-300 group-hover:scale-110'
        src="/image/pyramid.jpg"
        width={1920}
        height={1080}
        alt="Pyramid project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>Pyramid</p>
    <p className='opacity-50'>Agence de marketing par email</p>
  </div>
  
  <div className="md:col-start-1 md:col-end-[5] flex flex-col group">
    <div className="overflow-hidden h-full">
      <Image
        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
        src="/image/notsoliquid.jpg"
        width={1920}
        height={1080}
        alt="NotSoLiquid project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>Not So Liquid</p>
    <p className='opacity-50'>Cabinet de conseil en investissement</p>
  </div>
  
  <div className="md:col-start-5 md:col-end-[-1] flex flex-col group">
    <div className="overflow-hidden h-full">
      <Image
        className='h-full w-full transition-transform duration-300 group-hover:scale-110'
        src="/image/rtspoker.jpg"
        width={1920}
        height={1080}
        alt="RTS-Poker project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>RTS Poker</p>
    <p className='opacity-50'>Formation en ligne de poker</p>
  </div>
  
  <div className="col-start-1 col-end-[-3] flex flex-col group">
    <div className="overflow-hidden h-full">
      <Image
        className='h-full w-full transition-transform duration-300 group-hover:scale-110'
        src="/image/mytimecoaching.jpg"
        width={1920}
        height={1080}
        alt="MyTimeCoaching project"
      />
    </div>
    <p className='font-bold transition-colors duration-300 group-hover:text-[#17D449]'>My Time Coaching</p>
    <p className='opacity-50'>Salle de sport haut de gamme</p>
  </div>
</div>
      <div className="overflow-hidden w-full py-36">
        <p className="text-5xl md:text-9xl font-bold w-max animate-scroll">https<span className="text-[#17D449]">://</span>azerty.app https<span className="text-[#17D449]">://</span>azerty.app https<span className="text-[#17D449]">://</span>azerty.app</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full py-10 px-10 md:px-20 gap-10">
        <div className="col-span-2 flex flex-col gap-2">
          <p className='font-bold'>Nos services</p>
          <p className="max-w-xl opacity-50">Développement de sites web / Développement d&apos;applications mobiles / Design UX/UI / Création de contenu digital / Maintenance et support technique / Hébergement web / Développement de solutions sur mesure</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className='font-bold'>Travailler avec nous</p>
          <a className='opacity-50' href='mailto:hello@azerty.app'>hello@azerty.app</a>
        </div>
        <p className="col-span-2">Paris <ParisTime /></p>
        <p className='text-[#17D449] font-bold'>© AZERTY</p>
      </div>
    </main>
  )
}
