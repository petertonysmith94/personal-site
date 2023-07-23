import styled from "styled-components"
import { AdventYearConfig } from "../../../advent-of-code/types"
import { AdventYear } from "./advent-year"

export const AdventOfCode = ({
  config
}: {
  config: Array<AdventYearConfig>
}) => {
  return (
    <AdventCalendarWrapper>
      {
        config.map(
          (config: AdventYearConfig) => <AdventYear key={config.year} {...config} />
        )
      }
    </AdventCalendarWrapper>
  )
}

export const AdventCalendarWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`