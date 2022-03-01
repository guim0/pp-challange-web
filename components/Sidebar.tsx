import Image from "next/image";

import { css } from "@emotion/css";
import LogoPP from "../assets/icons/brand.png";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container>
      <section
        className={css`
          max-width: 256px;
          width: 100%;
          height: 100vh;
          border: 1px solid #eaefed;
          background-color: white;
          box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
        `}
      >
        <div>
          <div
            className={css`
              width: 100%;
              padding: 15.5px;
              padding-left: 30px;
              border-bottom: 1px solid #eaefed;
            `}
          >
            <Image src={LogoPP} alt="PP" />
          </div>
        </div>
      </section>
      <section
        className={css`
          width: 100%;
          height: 75px;
          padding: 20px;
          border-bottom: 1px solid #eaefed;
          background-color: white;
          box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
          display: flex;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <User>
          <UserLogo>LZ</UserLogo>
          <div className={css`
          line-height: 17px;`}>
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
      </section>
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
