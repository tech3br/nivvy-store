import styled from 'styled-components';

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

export const CustomButtonRoot = styled.button`
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

  :active {
    background-color: ${purple[300]};
  }

  :focus {
    box-shadow: 0 2px 8px 0 rgba(61, 71, 82, 0.1), 0 0 0 2px ${purple[300]};
    outline: none;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    width: 18px;
    height: 18px;
    margin: 0;
  }
`;