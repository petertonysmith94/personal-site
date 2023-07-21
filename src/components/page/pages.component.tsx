import { useMemo, useState } from "react";
import { useWindow } from "../../hooks/window";
import { Stepper } from "../stepper";
import { ChildrenWrapper, PagesWrapper, StepperWrapper } from "./page.styles";

export const Pages = (props: { children: JSX.Element[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [width, _height] = useWindow()

  // When mobile, render all children, otherwise just render the current page
  // Super hack to get the profile out the door
  const children = useMemo(
    () => width <= 768 ? props.children : props.children[currentPage - 1],
    [props.children, width, currentPage]
  )

  return (
    <PagesWrapper>
      <ChildrenWrapper>
      { children }
      </ChildrenWrapper>
      
      <StepperWrapper>
        <Stepper
          steps={props.children.length}
          currentStep={currentPage}
          onChange={setCurrentPage}
        />
      </StepperWrapper>
    </PagesWrapper>
  )
}
