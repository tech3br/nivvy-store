import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family};
  width: 100%;
  height: 56px;
`;
