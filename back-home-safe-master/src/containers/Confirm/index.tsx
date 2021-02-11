import React from "react";
import styled from "styled-components";
import cross from "../../assets/cross.png";
import tick from "../../assets/tick.png";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { zeroPadding } from "../../utils/zeroPadding";

type Props = {
  place: string;
};

export const Confirm = ({ place }: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    <>
      <Link to="/">
        <Cross src={cross} />
      </Link>
      <ContentWrapper>
        <Msg>你已進入場所</Msg>
        <Place value={place} readOnly />
        <Time>{`${year}-${zeroPadding(month)}-${zeroPadding(day)} ${zeroPadding(
          hour
        )}:${zeroPadding(minute)}`}</Time>
        <Tick src={tick} />
      </ContentWrapper>
      <ActionWrapper>
        <Link to="/">
          <Button>離開</Button>
        </Link>
        當你離開時請緊記按"離開"
      </ActionWrapper>
    </>
  );
};

const Cross = styled.img`
  height: 80px;
  float: right;
  position: absolute;
  right: 0;
`;

const Tick = styled.img`
  margin: auto;
  margin-top: 80px;
  width: 40%;
`;

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
  margin-top: 120px;
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

const Time = styled.div`
  color: #ffffff;
  text-align: center;
`;

const ActionWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #fff;
  padding-bottom: 40px;
`;
