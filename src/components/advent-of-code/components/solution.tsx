import { useMemo } from "react"
import { AdventAnswer, AdventAttempt as AdventAttemptFn, AdventInputConfig, AdventSolutionConfig } from "../../../advent-of-code/types"

const Attempt = ({
  attemptAnswer,
  index,
}: {
  attemptAnswer: AdventAnswer,
  index: number,
}) => {
  return (
    <div>
      {/* <h3>Attempt { index + 1 }</h3> */}
      { attemptAnswer }
    </div>
  )
}

export const Solution = ({ input, solution }: { input: AdventInputConfig, solution: AdventSolutionConfig }) => {
  /**
   * Render all the attempts for a given solution
   */
  const attempts = useMemo(() => solution.attempts()
    .map((attempt: AdventAttemptFn, index: number) => {
      const attemptAnswer = attempt(input)
      return <Attempt key={`attempt-${index}`} attemptAnswer={attemptAnswer} index={index} />
    }), [input, solution])

  return (
    <div>
      { attempts }
    </div>
  )
}
