import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 282px;
  height: auto;

  /* Style */

  background: ${({ theme }) => theme.colors.white};
  /* Outline */

  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  cursor: pointer;

  > svg {
    margin-top: 16px;
    margin-right: 16px;
    width: 24px;
    height: 24px;
    right: 0;
    position: absolute;
    z-index: 10;
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 306px;

  background: #e6e8ec;
  border-radius: 8px 8px 0px 0px;

  img {
    border-radius: 8px 8px 0px 0px;
    object-fit: cover;
    object-position: 100% 90%;
  }
`;

export const ProductCardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 176px;
  padding: 16px;
`;

export const ProductTypeDescription = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #828282;
`;

export const ProductTypeTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  display: flex;
  align-items: center;

  /* Black */

  color: #212121;
  margin-top: 8px;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
  height: 23px;
`;

export const ProductPrice = styled.span`
  display: flex;
  s {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;

    /* Disable */

    color: #828282;
  }

  strong {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    /* Black */

    color: #212121;
  }
`;

export const PromotionDiscount = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  gap: 8px;

  width: 47px;
  height: 23px;

  background: rgba(255, 0, 0, 0.1);
  border-radius: 4px;

  p {
    /* Caption/Medium */

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ff0000;
  }
`;

export const ProgressEndPromotion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    /* Caption/Regular */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Disable */

    color: #828282;
  }
`;

export const BorderLinearProgress = styled(LinearProgress)`
  ${({ theme }) => ({
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.colors.white,
      height: "10px",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: `linear-gradient(90deg, #FF512F 0%, #F09819 100%);`,
    },
  })}
`;
