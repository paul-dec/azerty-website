export default function Badge({ text, color }: { text: string, color: string }) {
  return (
    <div className="flex justify-center items-center p-3 bg-[#171717] rounded-lg border border-[#272727] gap-2 w-fit h-fit">
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="27" height="27" rx="6" fill={color} />
        <circle cx="9.89985" cy="10.0803" r="6.3" fill="black" />
        <circle cx="18.63" cy="8.27969" r="3.6" fill="#4E2DAB" />
        <circle cx="8.10015" cy="18.8104" r="2.7" fill="#382372" />
        <circle cx="18.63" cy="18.81" r="3.6" fill="#150A28" />
      </svg>
      <h2 className="text-2xl font-bold">{text}</h2>
    </div>
  )
}