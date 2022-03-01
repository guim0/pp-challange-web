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
background-color: ${isActive === 'active' ? '#B5F1DD' : '#EAEFED' };padding: 10px 5px;
border-radius: 8px;
`);

const Title = styled.span`
font-size: 14px;
`