import styled from "styled-components";
import {
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
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
`

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 16px;

  width: 100%;
  width: 1024px;
  height: 332px;

  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 8px;

  h4 {
    /* Heading/h4 */
    padding: 16px 0px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Black */
    color: #212121;
  }
`;

export const CodeTransactionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CustomTabsUnstyled = styl(TabsUnstyled)``;

export const Tab = styl(TabUnstyled)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  width: 134px;

  margin: 0px;
  padding: 0px;

  color: #828282;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #52057b;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabsList = styl(TabsListUnstyled)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0px;
  gap: 16px;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #e2e2e2;
`;

export const TabPanel = styl(TabPanelUnstyled)`
  display: flex;
  width: 100%;
  font-family: "Inter";
  font-size: 0.875rem;
`;
