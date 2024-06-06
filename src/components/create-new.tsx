import { ReactComponent as AddIcon } from "../assets/icon-add.svg";
import { SyntheticEvent, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import {AllMessage as Text } from "../../App"

type Props = {
  error: boolean;
};

const Containerdiv = styled.div`
  max-width: 520px;
  grid-column: 1;
  grid-row: 1;

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
  }
`;

const InputContainer = styled.div`
  display: flex;
`;

const InputText = styled.input<Props>`
  flex: 1;
  height: 56px;
  background: ${({ error }) => (error ? "rgba(255, 54, 78, 0.25)" : "#151a37")};
  border: 1px solid ${({ error }) => (error ? "#FF364E" : "#24293f")};
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 0 16px;
  outline: none;
  transition: 0.2s;

  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:hover,
  &:focus {
    border-color: ${({ error }) => (error ? "#FF364E" : "#7a38fe")};
  }
`;

const AddButton = styled.button<Props>`
  width: 56px;
  height: 56px;
  background: ${({ error }) => (error ? "#FF364E" : "#7a38fe")};
  border-radius: 0 8px 8px 0;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Titlediv = styled.h2`
  font-family: "Montserrat";
  font-size: 1.5rem;
  line-height: 135%;
  font-weight: 400;
  color: #fff;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293f;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useContext(AppContext);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    } else setError(true);
  };

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (error) setError(false);
    setInputValue(target.value);
  };

  const Title = () => {
    const imgUrl = new URL(`/src/assets/icon-pencil.svg`, import.meta.url).href;

    return (
      <TitleContainer>
        <Icon>
          <img src={imgUrl} width="24" height="24" alt="Pencil" />
        </Icon>
        <Titlediv>{ Text.newTask }</Titlediv>
      </TitleContainer>
    );
  };

  return (
    <Containerdiv>
      <Title/>

      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputText
            type="text"
            placeholder={Text.taskName}
            value={inputValue}
            onChange={handleChange}
            error={error}
          />
          <AddButton error={error}>
            <AddIcon />
          </AddButton>
        </InputContainer>
      </form>
    </Containerdiv>
  );
};

export default CreateNewTask;
