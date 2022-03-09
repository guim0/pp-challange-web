import { css as styling } from "@emotion/css";
import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import { BadgeStatus } from "./BadgeStatus";
import MoreIcon from "../assets/icons/more.svg";

interface AgentDetailsProps {
  userPhoto: string;
  userName: string;
  departments: string;
  position: string;
  unit: string;
  status: string;
}

interface ModalProps {
  isVisible: boolean;
}

export function AgentDetails({
  userPhoto,
  userName,
  department,
  position,
  unit,
  status,
}: AgentDetailsProps) {
  return (
    <Container>
      <Details status={status}>
        <li>
          <div
            className={styling`display: flex; align-items: center;gap: 8px; max-width:170px`}
          >
            <Image
              className={styling`border-radius:25px;`}
              src={userPhoto}
              width={40}
              height={40}
            />
            <p className={styling`width:100%`}>{userName}</p>
          </div>
        </li>
        <li>
          <span>{department}</span>
        </li>
        <li>{position}</li>
        <li className={styling`max-width: 150px`}>{unit}</li>
        <li>
          <BadgeStatus status={status} />
        </li>
      </Details>
      <MoreButton isVisible={true}>
        <Image src={MoreIcon} width={20} height={20} />
      </MoreButton>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Details = styled.ul<AgentDetailsProps>(
  ({ status }) =>
    css`
      display: grid;
      margin-left: -35px;
      grid-template-columns: 1.5fr 1.1fr 1fr 1.1fr 1.3fr;
      width: 100%;
      list-style: none !important;
      align-items: center;
      ${status === "inactive"
        ? " li {  filter: grayscale(2) opacity(0.4);}"
        : ""}
    `
);

const MoreButton = styled.div<ModalProps>(({ isVisible }) => css``);
