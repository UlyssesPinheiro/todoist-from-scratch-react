import React from "react";
import styled from "styled-components";
import { Font } from "../../../../helpers/Styles/Font";
import ViewButton from "../Today/ViewButton/ViewButton";
import Dots3Button from "../Helpers/Dots3Button";
import { headerItems } from "../Helpers/HeaderItems";
import MainAddTask from "../Helpers/MainAddTask/MainAddTask";

const DivRight = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Inbox() {
  return (
    <headerItems.MasterContainer>
      <headerItems.Container>
        <headerItems.TitleNav>
          <headerItems.Title>
            <h2>Inbox</h2>
          </headerItems.Title>
          <DivRight>
            <ViewButton />
            <Dots3Button />
          </DivRight>
        </headerItems.TitleNav>
        <MainAddTask />
      </headerItems.Container>
    </headerItems.MasterContainer>
  );
}
