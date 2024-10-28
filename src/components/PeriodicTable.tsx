import { Element } from "./Element"
import { elementsData } from "./elements"

export function PeriodicTable() {
  return (
    <div className="grid grid-cols-18 w-fit gap-[2px]">
      <div className="flex col-span-1">
        <Element data={elementsData[0]} />
      </div>
      <div className="flex col-start-18">
        <Element data={elementsData[1]} />
      </div>

      {elementsData
        .filter(data => data.atomic > 2 && data.atomic < 5)
        .map(data => (
          <div key={data.atomic} className="col-span-1 flex">
            <Element data={data} />
          </div>
        ))}
      <div className="col-span-10"></div>
      {elementsData
        .filter(data => data.atomic > 4 && data.atomic < 11)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}

      {elementsData
        .filter(data => data.atomic > 10 && data.atomic < 13)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
      <div className="col-span-10"></div>

      {elementsData
        .filter(data => data.atomic > 12 && data.atomic < 19)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}

      {elementsData
        .filter(data => data.atomic > 18 && data.atomic < 58)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
      {elementsData
        .filter(data => data.atomic > 71 && data.atomic < 90)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
      {elementsData
        .filter(data => data.atomic > 103 && data.atomic < 119)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
      <div className="flex col-span-18 p-4"></div>
      <div className="flex col-span-3 mt-2"></div>
      {elementsData
        .filter(data => data.atomic > 57 && data.atomic < 72)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
      <div className="flex col-span-3 bg-"></div>
      {elementsData
        .filter(data => data.atomic > 89 && data.atomic < 104)
        .map(data => (
          <div key={data.atomic} className="flex col-span-1">
            <Element data={data} />
          </div>
        ))}
    </div>
  )
}
