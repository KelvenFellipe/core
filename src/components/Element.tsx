"use client"
import { colors } from "./colors"
import { elementsProps } from "./elements"

interface props {
  data: elementsProps
}
export function Element({ data }: props) {
  return (
    <div
      className={`relative group aspect-square w-[76px] rounded-md grid grid-cols-1 text-center p-1 ease-in-out duration-300 select-none
         border border-black hover:scale-125 hover:z-10 hover:shadow-2xl hover:shadow-black ${colors(
           data.material
         )}`}
      key={data.atomic}
    >
      <div className="text-xxs flex justify-between ">
        <p>{data.atomic}</p>
        <p className={`hidden group-hover:flex `}>{data.mass.slice(0, 6)}</p>
      </div>

      <p className="text-3xl font-bold">{data.abv}</p>
      <p className="text-xxs">{data.name}</p>
    </div>
  )
}
