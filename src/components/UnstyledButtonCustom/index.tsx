import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import styled from "styled-components";

export interface Props extends ButtonUnstyledProps {
  children: React.ReactNode;
}

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>
) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const purple = {
  50: "#52057b",
  100: "#631e88",
  200: "#753795",
  300: "#8650a3",
  500: "#9769b0",
  400: "#a982bd",
  600: "#ba9bca",
  700: "#cbb4d7",
  800: "#dccde5",
  900: "#eee6f2",
  1000: "#ffffff",
};

const CustomButtonRoot = styled(ButtonUnstyled)`
  width: 100px;
  height: 48px;

  padding: 16px;
  /* Body/Regular */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Style */

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${purple[300]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 2px 8px 0 rgba(61, 71, 82, 0.1), 0 0 0 2px ${purple[300]};
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    width: 18px;
    height: 18px;
    margin: 0;
  }
`;

const UnstyledButtonCustom: React.FC<Props> = (props: Props): JSX.Element => {
  return <CustomButtonRoot>{props.children}</CustomButtonRoot>;
};

export default UnstyledButtonCustom;
