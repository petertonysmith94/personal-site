import { AdventYearConfig } from "../../../advent-of-code/types"
import { AdventYear } from "./advent-year"

export const AdventOfCode = ({
  config
}: {
  config: Array<AdventYearConfig>
}) => {
  return (
    <div>
      {
        config.map(
          (config: AdventYearConfig) => <AdventYear key={config.year} {...config} />
        )
      }
    </div>
  )
}