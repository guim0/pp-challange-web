import styled, { css } from "styled-components";

interface BadgeStatusProps {
  status: string;
}

type BadgeBehaviorProps = {
  isActive: string;
};
export function BadgeStatus({ status }: BadgeStatusProps) {
  return (
    <>
      <Container isActive={status}>
        <Title>{status === 'active' ? 'Ativo' : 'Inativo'}</Title>
      </Container>
    </>
  );
}

const Container = styled.div<BadgeBehaviorProps>(({ isActive }) => css`
background-color: ${isActive === 'active' ? '#B5F1DD' : '#EAEFED' };padding: 2px 5px;
border-radius: 20px;
max-width: 80px;
text-align: center;

`);

const Title = styled.span`
font-size: 14px;
font-weight: 500;
color: #34423D;
`