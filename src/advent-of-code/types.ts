export type AdventAnswer = string | number | null
export type AdventAttempt = (input: AdventInputConfig) => AdventAnswer

export type AdventInputConfig = {
  url: string,
  content: string
}

export type AdventSolutionConfig = {
  attempts: () => Array<AdventAttempt>,
  answer: AdventAnswer
}

export type AdventDayConfig = {
  day: number,
  url: string,
  title: string,
  question: string;
  input: AdventInputConfig,
  solution: AdventSolutionConfig
}

export type AdventYearConfig = {
  year: number,
  days: Array<AdventDayConfig>
}
