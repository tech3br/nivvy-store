import styled from "styled-components";
import { styled as styl } from "@mui/system";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
`;

export const TitleContainer = styl("div")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }
`;

export const OffersCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1440px;
  gap: 16px;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 138px;
      max-width: 80px;
      /* Paragraf/Medium */

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      /* or 22px */

      text-align: center;

      /* Black */

      color: #212121;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        border-radius: 8px;
        height: 138px;
        max-width: 80px;

        :hover {
          background-color: #e1e1e1;
        }
      }

      p {
        margin-bottom: 0px;
        margin-top: 16px;
        line-break: break-all;

        /* Paragraf/Medium */

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        /* or 22px */

        text-align: center;

        /* Black */

        color: #212121;
      }
    }
  }
`;
