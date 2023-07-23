import styled from "styled-components"
import { AdventDayConfig, AdventYearConfig } from "../../../advent-of-code/types"
import { AdventDay } from "./advent-day"

export const AdventYear = (yearConfig: AdventYearConfig) => {
  return (
    <AdventYearWrapper>
      <AdventYearTitle>{ yearConfig.year }</AdventYearTitle>

      <AdventDaysWrapper>
        {
          yearConfig.days.map(
            (dayConfig: AdventDayConfig) => (
              <AdventDay
                key={`${yearConfig.year}-${dayConfig.day}-${dayConfig.part ?? 1}`}
                {...dayConfig}
              />
            )
          )
        }
      </AdventDaysWrapper>
    </AdventYearWrapper>
  )
}

export const AdventYearWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AdventYearTitle = styled.h2`
  font-size: 2rem;
`

export const AdventDaysWrapper = styled.div`
  display: flex;
  flex-direction: column;

`