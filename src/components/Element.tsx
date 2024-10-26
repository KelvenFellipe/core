"use client"
import { useState } from "react"
import { colors } from "./colors"
import { elementsProps } from "./elements"

interface props {
  data: elementsProps
  className?: string
}
export function Element({ data, className }: props) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`relative aspect-square w-[92px] rounded-md font-bold grid grid-cols-1 text-center p-1 
        ease-in-out duration-300 select-none border-black ${colors(data.material)} ${className} ${
        hover && "scale-125 z-40 shadow-2xl shadow-black border "
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={data.atomic}
    >
      <div className="text-xs flex justify-between ">
        <p>{data.atomic}</p>
        <p className={`${hover ? "" : "hidden"}`}>{data.mass}</p>
      </div>
      <p className="text-4xl">{data.abv}</p>
      <p className="text-sm scale-75">{data.name}</p>
    </div>
  )
}
