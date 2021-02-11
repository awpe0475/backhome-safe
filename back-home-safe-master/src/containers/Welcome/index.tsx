import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";

type Props = {
  place: string;
  setPlace: (input: string) => void;
};

export const Welcome = ({ place, setPlace }: Props) => (
  <>
    <ContentWrapper>
      <Msg>我想去</Msg>
      <Place value={place} onChange={(e) => setPlace(e.target.value)} />
    </ContentWrapper>
    <ActionWrapper>
      <Link to="/confirm">
        <Button>話去就去!</Button>
      </Link>
    </ActionWrapper>
  </>
);

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Msg = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 15px;
`;

const Place = styled.input`
  text-align: center;
  font-size: 32px;
  background-color: transparent;
  border: 0;
  outline: none;
  margin: 8px 0;
  color: #fed426;

  &:focus {
    outline: none;
  }
`;

const ActionWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #fff;
  padding-bottom: 40px;
`;
