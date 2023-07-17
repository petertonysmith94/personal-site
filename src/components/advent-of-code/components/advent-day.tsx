import { AdventDayConfig } from "../../../advent-of-code/types"
import { AdventInputUrl } from "./input-url"
import { Solution } from "./solution"

export const AdventDay = (adventDay: AdventDayConfig) => {
  return (
    <div>
      <AdventInputUrl input={adventDay.input} />
      <Solution input={adventDay.input} solution={adventDay.solution} />
    </div>
  )
}