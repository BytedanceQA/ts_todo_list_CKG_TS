import { useContext } from "react";
import { AppContext } from "../AppContext";
import TaskItem from "./task-item";
import Title from "./title";
import styled from "styled-components";
import { AllMessage as Text } from "../../App";

type Props = {
  progressBarValue: number;
};

const Container = styled.div<Props>`
  max-width: 520px;
  grid-column: 1;
  grid-row: 2;
  margin-top: ${(props) => (props.progressBarValue === 100 ? "-92px" : "0")};

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #24293f;
      margin: 24px 0;
    }
  }
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TodayTasksMessage = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #fff;

  display: flex;
  justify-content: center;
`;

const TodayTasks = () => {
  const { taskList, progressBarValue } = useContext(AppContext);

  return (
    <Container progressBarValue={progressBarValue}>
      <Title iconName="list" text={Text.todayTask} />

      {progressBarValue === 100 || taskList.length === 0 ? (
        <TodayTasksMessage>
          {Text.noMore}
        </TodayTasksMessage>
      ) : (
        <TaskList>
          {taskList.map(
            (task) => !task.done && <TaskItem key={task.id} task={task} />
          )}
        </TaskList>
      )}
    </Container>
  );
};

export default TodayTasks;
