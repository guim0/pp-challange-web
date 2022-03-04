import { css as styling } from "@emotion/css";
import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import { BadgeStatus } from "./BadgeStatus";
import MoreIcon from '../assets/icons/more.svg'

interface AgentDetailsProps {
  userName: string;
  departament: string;
  collaborators: number
}

interface ModalProps {
  isVisible: boolean;
}

export function RolesDetails({
  userName,
  departament,
  collaborators
}: AgentDetailsProps) {
  return (
    <Container>
      <Details>
        <li>
          <div className={styling`display: flex; align-items: center;gap: 8px; max-width:180px`}>

            <p className={styling`max-width: 180px`}>{userName}</p>
          </div>
        </li>
        <li>
          <span className={styling`max-width: 180px`}>{departament}</span>
        </li>
        <li> <span className={styling`max-width: 180px`}>{collaborators}</span></li>
      
     
      <MoreButton isVisible={true}>
        <Image src={MoreIcon} width={20} height={20} />
      </MoreButton>
      </Details>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Details = styled.ul`
     display: grid ;
     grid-template-columns: 8fr 8fr 8fr 1fr;
      margin-left: -35px;
justify-content: space-between ;
     width: 100% ;
      list-style: none !important;
     
      align-items: center;
    `


const MoreButton = styled.div<ModalProps>(({ isVisible }) => css``);
