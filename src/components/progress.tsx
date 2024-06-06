import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import Title from "./title";
import styled, { keyframes } from "styled-components";
import imgUrl from "../assets/img-trophy-min.png";
import { AllMessage as Text } from "../../App";

type Props = {
  progressBarValue: number;
};

const Container = styled.div`
  max-width: 520px;
  grid-column: 2;
  grid-row: 1;
  align-self: end;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #24293f;
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    grid-column: 1;
    grid-row: 3;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #282e4f;
  border-radius: 2px;
`;

const ProgressBarFill = styled.div<Props>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #40fb72;
  box-shadow: 0px 0px 12px 4px rgba(64, 251, 114, 0.25);
  transition: 0.8s;
  transform: translateX(${(props) => `-${100 - props.progressBarValue}%`});
`;

const ProgressBarValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    color: #fff;
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const TaskCompletedMessage = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(64, 251, 114, 0.25);
  border: 1px solid #40fb72;
  border-radius: 8px;
  padding: 16px;
  max-width: 324px;
  height: 80px;
  margin: 24px auto 32px;
  animation: ${fadeInDown} 0.8s;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 150%;
    font-weight: 700;
    color: #fff;
  }
`;


const Progress = () => {
  const { progressBarValue } = useContext(AppContext);

  return (
    <Container>
      <Title iconName="chart" text={Text.progress} />

      <ProgressBar>
        <ProgressBarFill progressBarValue={progressBarValue} />
      </ProgressBar>

      <ProgressBarValues>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </ProgressBarValues>

      {progressBarValue === 100 && (
        <TaskCompletedMessage progressBarValue={progressBarValue}>
          <img src={imgUrl} alt="Troféu" width="40" height="40" />
          <span>{Text.congra}</span>
        </TaskCompletedMessage>
      )}
    </Container>
  );
};

export default Progress;
