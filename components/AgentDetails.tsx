import Image from "next/image";
import styled from "styled-components";
import { BadgeStatus } from "./BadgeStatus";

interface AgentDetailsProps {
  userPhoto: string;
  userName: string;
  department: string;
  position: string;
  unit: string;
  status: string;
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
      <Details>
        <li>
          <div>
            <Image src={userPhoto} /> <p>{userName}</p>
          </div>
        </li>
        <li>
          <span>{department}</span>
        </li>
        <li>{position}</li>
        <li>{unit}</li>
        <li>
          <BadgeStatus status={status} />
        </li>
      </Details>
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
`;

const Details = styled.ul`
display: grid;
grid-template-columns: 1.3fr 1.3fr 1.2fr 1.2fr 1.2fr;

`
