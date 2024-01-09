import styled from "styled-components"
import { AdventDayConfig } from "../types"
import { Solution } from "./solution"

export const AdventDay = (adventDay: AdventDayConfig) => {
  return (
    <AdventDayWrapper>
      <AdventDayTitle>{ adventDay.day }{ adventDay.part ? ` - Part ${adventDay.part}`: null }</AdventDayTitle>
      {/* <AdventInputUrl
        input={adventDay.input}
      /> */}
      <Solution
        input={adventDay.input}
        solution={adventDay.solution}
      />
    </AdventDayWrapper>
  )
}

export const AdventDayWrapper = styled.div`
  background-color: yellow;
`

export const AdventDayTitle = styled.h3`
  font-size: 1.5rem;
`