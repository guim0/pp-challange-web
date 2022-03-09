import { css as styling } from "@emotion/css";
import Image from "next/image";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BadgeStatus } from "./BadgeStatus";
import MoreIcon from "../assets/icons/more.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";
import ArrowUp from "../assets/icons/arrow-up.svg";

interface AgentDetailsProps {
  position: string;
  departament: string;
  collaborators: number;
}

interface ModalProps {
  isVisible: boolean;
}

export function RolesDetails({
  position,
  departament,
  collaborators,
}: AgentDetailsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Details >
        <li>
          <div
            className={styling`display: flex; align-items: center;gap: 8px; max-width:180px`}
          >
            <p className={styling`max-width: 180px`}>{position}</p>
          </div>
        </li>
        <li>
          <span className={styling`max-width: 180px`}>{departament}</span>
        </li>
        <li>
          <span className={styling`max-width: 180px`}>{collaborators}</span>
        </li>

        <MoreButton isVisible={true}>
          <Image src={MoreIcon} width={20} height={20} alt="Mais"/>
        </MoreButton>
      </Details>

      <DetailsMobile>
        <div
          className={styling`color:#587169; display: flex; align-items: center; justify-content: space-between`}
        >
          <AgentDetail>
            <h5>Cargo</h5>
            <p className={styling`font-weight: 500;font-size: 14px`}>
              {position}
            </p>
          </AgentDetail>

          {isOpen === false && (
            <SwitchDropdown onClick={() => setIsOpen(true)}>
              <>
                <div>
                  <Image src={ArrowDown} alt="abrir"/>
                </div>
              </>
            </SwitchDropdown>
          )}
          {isOpen === true && (
            <SwitchDropdown onClick={() => setIsOpen(false)}>
              <>
                <div>
                  <Image src={ArrowUp} alt="fechar" />
                </div>
              </>
            </SwitchDropdown>
          )}
        </div>
        {isOpen && (
          <FullDetails>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Departamento</h5>
              <span>{departament}</span>
            </li>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Colaboradores</h5>
              {collaborators}
            </li>
          </FullDetails>
        )}
      </DetailsMobile>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Details = styled.ul`
  display: grid;
  grid-template-columns: 8fr 8fr 8fr 1fr;
  margin-left: -35px;
  justify-content: space-between;
  width: 100%;
  list-style: none !important;

  align-items: center;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const MoreButton = styled.div<ModalProps>(({ isVisible }) => css``);

const DetailsMobile = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    border: 2px solid #b5f1dd;
    padding: 20px;
    filter: drop-shadow(0px 4px 8px rgba(165, 171, 179, 0.16));
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const AgentDetail = styled.div`
  line-height: 18px;
  margin-left: 20px;
`;

const FullDetails = styled.ul`
  margin-left: -20px;
  color: #587169;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  gap: 12px;
  list-style: none;
`;
const SwitchDropdown = styled.div`
  padding: 5px 20px;
  :hover {
    cursor: pointer;
  }
`;
