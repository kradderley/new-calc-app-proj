import React from "react";
import "./calculator.css";
import styled from "styled-components";

const Calculator = () => {
  return (
    <>
      <StyledSection>
        <section>
          <div className="sectionOne">Hello</div>
        </section>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  background-color: gray;
  height: 100vh;
  width: 100vw;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 390px;
  max-height: 800px;
  overflow: hidden;
  text-align: center;
`;

export default Calculator;
