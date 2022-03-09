import Image from "next/image";

import { css } from "@emotion/css";
import LogoPP from "../assets/icons/brand.png";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container>
      <SideLeftContainer>
        <LogoDiv>
          <Image src={LogoPP} alt="PP" />
        </LogoDiv>
      </SideLeftContainer>

      <HeaderSection>
        <User>
          <UserLogo>LZ</UserLogo>
          <div
            className={css`
              line-height: 17px;
            `}
          >
            <span
              className={css`
                color: #34423d;
                font-weight: bold;
              `}
            >
              Luiz Zlochevsky
            </span>
            <br />
            <span
              className={css`
                color: #587169;
              `}
            >
              meus dados
            </span>
          </div>
        </User>
      </HeaderSection>

      <HeaderMobile>
        <UserLogo>LZ</UserLogo>
        <LogoDiv>
          <Image src={LogoPP} alt="PP" />
        </LogoDiv>
      </HeaderMobile>
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: -99;
  top: 0 !important;
  width: 100%;
`;
const SideLeftContainer = styled.section`
  max-width: 256px;
  width: 100%;
  height: 100vh;
  border: 1px solid #eaefed;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const LogoDiv = styled.div`
  width: 100%;
  padding: 15.5px;
  padding-left: 30px;
  border-bottom: 1px solid #eaefed;
`;

const HeaderSection = styled.header`
  width: 100%;
  height: 75px;
  padding: 20px;
  border-bottom: 1px solid #eaefed;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: flex-end;
  border-left: 1px solid #eaefed;
  margin-bottom: -20px;
  padding: 15px;
  padding-left: 40px;
`;
const UserLogo = styled.div`
  width: 40px;
  height: 40px;
  padding: 15px;
  border-radius: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b5f1dd;
`;

const HeaderMobile = styled.section`
  @media screen and (min-width: 1201px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 75px;
    padding: 20px;
    border-bottom: 1px solid #eaefed;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    display: flex;
    align-items: center;
   
  }
`;
