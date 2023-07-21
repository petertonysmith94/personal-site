import { StepElement, StepperWrapper } from "./stepper.styles"

export const Stepper = ({
  steps,
  currentStep,
  onChange
}: {
  /**
   * The number of steps total
   */
  steps: number,

  /**
   * The current step
   */
  currentStep: number,

  /**
   * Callback for when the step changes
   * @returns {(step: number) => void}
   */
  onChange: (step: number) => void,
}) => {
  const stepElements = Array.from({ length: steps }, (_, i) => (
    <StepElement
      key={`stepper-${i}`}
      onClick={() => onChange(i + 1)}
      style={{
        cursor: 'pointer',
        color: i + 1 === currentStep ? 'red' : 'black'
      }}
    >
      {i + 1}
    </StepElement>
  ))

  return (
    <StepperWrapper>
      { stepElements }
    </StepperWrapper>
  )
}