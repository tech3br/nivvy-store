import * as React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

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


const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;

  width: 470px;
  height: 49px;

  background: #FCFCFC;
  /* Disable */

  border: 1px solid #828282;
  border-radius: 6px;

  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    border-color: ${purple[400]};
  }

  &:focus {
    border-color: ${purple[400]};
    outline: 2px solid ${theme.palette.mode === "dark" ? purple[500] : purple[200]};
  }
`
);

const CustomInputComponent = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function CustomInput(props) {
  return <CustomInputComponent {...props} />;
}
