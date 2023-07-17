import { AdventDayConfig, AdventYearConfig } from "../../../advent-of-code/types"
import { AdventDay } from "./advent-day"

export const AdventYear = (yearConfig: AdventYearConfig) => {
  return (
    <div>
      {
        yearConfig.days.map(
          (dayConfig: AdventDayConfig) => (
            <AdventDay
              key={`${yearConfig.year}-${dayConfig.day}`}
              {...dayConfig}
            />
          )
        )
      }
    </div>
  )
}