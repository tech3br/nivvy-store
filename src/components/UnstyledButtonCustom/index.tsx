import * as React from "react";
import { CustomButtonRoot } from './styles';

export interface Props {
  children: React.ReactNode;
}

const UnstyledButtonCustom: React.FC<Props> = (props: Props): JSX.Element => {
  return <CustomButtonRoot>{props.children}</CustomButtonRoot>;
};

export default UnstyledButtonCustom;
