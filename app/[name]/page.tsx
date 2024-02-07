import Image from 'next/image'
import Badge from '@/components/badge'
const Reviews = dynamic(
  () => import('@/components/reviews'),
  { ssr: false }
)
import Navbar from '@/components/navbar';
import { promises as fs } from 'fs';
import parse from 'html-react-parser';
import { GeistSans } from 'geist/font/sans';
import dynamic from 'next/dynamic';

export default async function Page({ params }: { params: { name: string } }) {
  const file = await fs.readFile(process.cwd() + '/app/json/' + params.name + '.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col min-h-screen scroll-smooth overflow-x-hidden	p-8 gap-24">
      <Navbar name={data.name} url={data.url} price={data.price} color={data.color} />
      <div className="flex flex-row max-w-[1000px] w-full mx-auto justify-between">
        <a className='flex items-center'>
          <svg className='overflow-visible w-[140px] h-[28px] sm:w-[200px] sm:h-[40px]' viewBox="0 0 289 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="57" height="57" rx="6" fill={data.color} />
            <circle cx="20.8996" cy="21.2814" r="13.3" fill="black" />
            <circle cx="39.33" cy="17.4799" r="7.6" fill="#4E2DAB" />
            <circle cx="17.1001" cy="39.7107" r="5.7" fill="#382372" />
            <circle cx="39.33" cy="39.7113" r="7.6" fill="#150A28" />
            <text className={GeistSans.className} fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontSize="80" fontWeight="700" letterSpacing="-0.05em"><tspan x="58" y="56.8">{data.name}</tspan></text>
          </svg>
        </a>
        <a href={data.url} target='_blank' className='px-3 py-3 sm:px-5 sm:py-3 bg-white text-base text-black rounded-lg font-bold'>Commencer</a>
      </div>
      <div className='flex flex-col max-w-[1000px] w-full mx-auto gap-4 items-center'>
        <h1 className='text-white text-center font-black text-4xl sm:text-7xl'>{parse(data.title)}</h1>
        <h2 className='text-white text-center font-bold text-2xl opacity-90'>{parse(data.subtitle)}</h2>
        <p className='text-white text-center font-medium text-lg opacity-80'>{parse(data.description)}</p>
      </div>
      <div className="flex flex-col max-w-[1000px] w-full mx-auto justify-between gap-12 p-10 rounded-lg border border-[#272727] bg-[#171717]">
        <div className='mx-auto'>
          <Badge text={'Avec ' + data.name} color={data.color} />
        </div>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-[#9452FF]">{data.serviceName1}</h3>
            <p className="text-center text-base opacity-80">{data.serviceDescription1}</p>
            <Image
              alt={data.serviceName1}
              className="w-48 h-48 rounded-lg mt-auto"
              height="200"
              src={"/" + data.name.toLowerCase() + "/image1.png"}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-[#9452FF]">{data.serviceName2}</h3>
            <p className="text-center text-base opacity-80">{data.serviceDescription2}</p>
            <Image
              alt={data.serviceName2}
              className="w-48 h-48 rounded-lg mt-auto"
              height="200"
              src={"/" + data.name.toLowerCase() + "/image2.png"}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-[#9452FF]">{data.serviceName3}</h3>
            <p className="text-center text-base opacity-80">{data.serviceDescription3}</p>
            <Image
              alt={data.serviceName3}
              className="w-48 h-48 rounded-lg mt-auto"
              height="200"
              src={"/" + data.name.toLowerCase() + "/image3.png"}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1000px] w-full mx-auto justify-between gap-12">
        <Badge text='Les avantages' color={data.color} />
        <div className="flex flex-col sm:grid sm:grid-cols-5 gap-12">
          <div className='sm:col-span-3'>
            <h3 className="text-xl font-semibold mb-4">{data.advantage1}</h3>
            <p className="text-base mb-12 opacity-80">{data.advantageDescription1}</p>
            <h3 className="text-xl font-semibold mb-4">{data.advantage2}</h3>
            <p className="text-base mb-12 opacity-80">{data.advantageDescription2}</p>
            <h3 className="text-xl font-semibold mb-4">{data.advantage3}</h3>
            <p className="text-base opacity-80">{data.advantageDescription3}</p>
          </div>
          <div className='sm:col-span-2'>
            <Image
              alt="Illustration"
              className="w-full h-52 sm:h-full bg-cover bg-no-repeat bg-center rounded-lg"
              height="400"
              src={"/" + data.name.toLowerCase() + "/image4.png"}
              style={{
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-12 w-full items-center'>
        <div className='max-w-[1000px] mx-auto w-full'>
          <Badge text='Les avis de nos clients' color={data.color} />
        </div>
        <Reviews reverse={false} />
        <Reviews reverse={true} />
      </div>
      <div className='flex flex-row max-w-[1000px] w-full justify-between mb-44 mx-auto items-center'>
        <p className='flex gap-1 items-center text-base'>
          <span className='opacity-80'>Réalisé avec</span>
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65306 16.9146L9.64806 16.9116L9.62906 16.9016C9.23445 16.6869 8.84691 16.4594 8.46706 16.2196C7.56142 15.6497 6.69848 15.0147 5.88506 14.3196C4.04506 12.7326 2.00006 10.3516 2.00006 7.49957C2.00015 6.56904 2.28871 5.6614 2.82601 4.90167C3.36331 4.14192 4.12292 3.56743 5.00026 3.25729C5.87759 2.94715 6.8295 2.91662 7.72491 3.1699C8.62029 3.42318 9.41522 3.94782 10.0001 4.67157C10.5849 3.94782 11.3798 3.42318 12.2752 3.1699C13.1706 2.91662 14.1225 2.94715 14.9998 3.25729C15.8772 3.56743 16.6368 4.14192 17.1741 4.90167C17.7114 5.6614 18 6.56904 18.0001 7.49957C18.0001 10.3516 15.9561 12.7326 14.1151 14.3196C12.9594 15.307 11.7048 16.1723 10.3711 16.9016L10.3521 16.9116L10.3471 16.9146H10.3451C10.2388 16.9709 10.1204 17.0004 10.0002 17.0005C9.87991 17.0007 9.76145 16.9716 9.65506 16.9156L9.65306 16.9146Z" fill="#EF4444" />
            </svg>
          </span>
          <span className='opacity-80'>par</span>
          <a href='/'>Azerty</a>
        </p>
        <a href='https://www.linkedin.com/in/pauldecrosse/' target='_blank' className='px-3 py-2 rouded-lg bg-[#171717] border border-[#272727] rounded-lg'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8" clipPath="url(#clip0_811_305)">
              <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_811_305">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </main>
  )
}
