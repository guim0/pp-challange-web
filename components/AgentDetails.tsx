import { css as styling } from "@emotion/css";
import Image from "next/image";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BadgeStatus } from "./BadgeStatus";
import MoreIcon from "../assets/icons/more.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";
import ArrowUp from "../assets/icons/arrow-up.svg";
interface AgentDetailsProps {
  userPhoto: string;
  userName: string;
  department: string;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      {/* <MoreButton isVisible={true}>
        <Image src={MoreIcon} width={20} height={20} />
      </MoreButton> */}

      <DetailsMobile>
        <div className={styling`color:#587169; display: flex; align-items: center; justify-content: space-between`}>
          <div>
          <span className={styling` font-weight: 500;font-size: 14px`}>
            Nome completo
          </span>
          <AgentDetail>
            <AgentPhoto src={userPhoto}></AgentPhoto>
            <p className={styling`font-weight: 500;`}>{userName}</p>
          </AgentDetail>
          </div>
          {isOpen === false && (
            <SwitchDropdown onClick={() => setIsOpen(true)}>
              <>
                <div>
                  <Image src={ArrowDown} />
                </div>
              </>
            </SwitchDropdown>
          )}
          {isOpen === true && (
            <SwitchDropdown onClick={() => setIsOpen(false)}>
              <>
                <div>
                  <Image src={ArrowUp} />
                </div>
              </>
            </SwitchDropdown>
          )}
        </div>

        {isOpen && (
          <FullDetails status={status}>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Departamento</h5>
              <span>{department}</span>
            </li>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Cargo</h5>
              {position}
            </li>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Unidade</h5>
              {unit}
            </li>
            <li
              className={styling`max-width:120px;width:100%;display: flex; flex-direction: column; align-items: flex-start;text-align: left; font-size: 15px; line-height: 18px`}
            >
              <h5>Status</h5>
              <BadgeStatus status={status} />
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

      @media screen and (max-width: 1200px) {
        display: none;
      }
    `
);

const MoreButton = styled.div<ModalProps>(({ isVisible }) => css``);

const DetailsMobile = styled.div`
  margin-bottom: 20px ;
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
    margin-bottom:20px ;
  }
`;

const AgentDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const AgentPhoto = styled.img`
  width: 38px;
  border: 2px solid #1dd195;
  border-radius: 20px;
 
`;

const FullDetails = styled.ul<AgentDetailsProps>(
  ({ status }) =>
    css`
      margin-left: -20px;
      color: #587169;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;

      gap: 12px;
      list-style: none;
      ${status === "inactive"
        ? " li {  filter: grayscale(2) opacity(0.4);}"
        : ""}
    `
);
const SwitchDropdown = styled.div`
  padding: 5px 20px ;
  :hover {
    cursor: pointer;
  }
`;
