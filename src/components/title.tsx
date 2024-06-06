import styled from "styled-components";

type TitleProps = {
  iconName: "pencil" | "list" | "chart" | "completed";
  text: string;
};

const Container = styled.div`
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


const Title = ({ iconName, text }: TitleProps) => {
  const imgUrl = new URL(`/src/assets/icon-${iconName}.svg`, import.meta.url)
    .href;

  return (
    <Container>
      <Icon>
        <img src={imgUrl} width="24" height="24" alt={iconName} />
      </Icon>
      <Titlediv>{text}</Titlediv>
    </Container>
  );
};

export default Title;
