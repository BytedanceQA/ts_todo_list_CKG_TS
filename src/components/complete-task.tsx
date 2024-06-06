import { useContext } from "react";
import { AppContext } from "../AppContext";
import TaskItem from "./task-item";
import Title from "./title";
import styled from "styled-components";
import { AllMessage as Text } from "../../App";

const Container = styled.div`
  max-width: 520px;
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 768px) {
    max-width: 100%;
    grid-column: 1;
    grid-row: 4;
  }
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CompletedTasks = () => {
  const { taskList } = useContext(AppContext);

  return (
    <Container>
      <Title iconName="completed" text={Text.complete} />

      <TaskList>
        {taskList.map(
          (task) => task.done && <TaskItem key={task.id} task={task} />
        )}
      </TaskList>
    </Container>
  );
};

export default CompletedTasks;
