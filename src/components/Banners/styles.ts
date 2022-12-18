import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const LeftSlider = styled.div`
  display: flex;
  align-items: center;

  width: 322px;
  height: 332px;
`;

export const RightSlider = styled.div`
  display: flex;

  align-items: center;

  width: 1024px;
  height: 332px;
`;
