import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Inner = styled.nav`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
`;

export const LogoContainer = styled.div`
  width: 33.333;
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }

  a > p {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  margin: 0px 16px;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 576px;
  height: 38px;

  background: #fcfcfc;
  /* Outline */
  border: 1px solid #e2e2e2;
  border-radius: 6px;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background: #fcfcfc;
  }

  svg {
    margin-left: 16px;

    :hover {
      cursor: pointer;
      font-weight: 800;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 38px;
  gap: 24px;

  svg {
    :hover {
      cursor: pointer;

      path {
        color: #000000;
        font-weight: 800;
      }
    }
  }
`;

export const ProfilePerson = styled.div`
  display: flex;
`;

export const ProfilePersonPicture = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 8px;
  background-color: #f1f1f1;
  margin-right: 8px;
`;

export const ProfilePersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    margin: 0;
  }
`;

export const ProfilePersonInfoName = styled.p`
  /* Body/Medium */

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Black */

  color: #212121;
`;

export const ProfilePersonInfoStatus = styled.p`
  /* Caption/Regular */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #129a00;
`;
