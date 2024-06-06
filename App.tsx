import React from "react";
import ReactDOM from "react-dom/client";
import { AppStorage } from "./src/AppContext";
import * as C from "./src/globalStyles";
import styled from "styled-components";
import CreateNewTask from "./src/components/create-new";
import TodayTasks from "./src/components/today-task";
import Progress from "./src/components/progress";
import CompletedTasks from "./src/components/complete-task";
import background from "./src/assets/background-min.png";

export const AllMessage = {
  newTask: "创建新任务",
  taskName: "Nome da tarefa",
  todayTask: "Tarefas de hoje",
  congra: "Parabéns! Você concluiu todas as tarefas de hoje!", 
  complete: "Tarefas concluídas",
  progress: "进度",
  noMore: "Você não tem tarefas disponíveis",
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;

export const Content = styled.section`
  max-width: 1248px;
  padding: 96px 16px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 176px;

  @media (max-width: 1100px) {
    column-gap: 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding: 48px 16px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  min-height: calc(100vh - 272px);
  height: calc(100% - 192px);
  background: #24293f;
  position: absolute;
  top: 96px;
  left: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Headerdiv = styled.header`
  border-bottom: 1px solid #151a37;
`;

const HeaderContainer = styled.div`
  max-width: 1248px;
  padding: 20px 16px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
`;

const Header = () => {
  return (
    <Headerdiv>
      <HeaderContainer>
        <HeaderTitle>To-Do List</HeaderTitle>
      </HeaderContainer>
    </Headerdiv>
  );
};


const App = () => {
  return (
    <>
      <C.GlobalStyle/>
      <Container>
        <Header />
        <Content>
          <CreateNewTask />
          <TodayTasks />
          <Divider />
          <Progress />
          <CompletedTasks />
        </Content>
      </Container>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStorage>
      <App />
    </AppStorage>
  </React.StrictMode>
);