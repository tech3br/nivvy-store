import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  gap: 760px;

  height: 40px;

  background-color: #212121;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Inner = styled.nav`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftNavigationDisclaimer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  gap: 16px;

  li {
    /* Caption/Regular */

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Style */

    color: #ffffff;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const RightNavigationDisclaimer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  gap: 16px;

  li {
    /* Caption/Regular */

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Style */

    color: #ffffff;

    :hover {
      text-decoration: underline;
    }
  }
`;
