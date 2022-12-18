import Link from "next/link";
import * as S from "./styles";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly location: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const locations: readonly ColourOption[] = [
  {
    value: "São Paulo, Brazil",
    label: "São Paulo, Brazil",
    location: "São Paulo, Brazil",
  },
  {
    value: "Rio de Janeiro, Brazil",
    label: "Rio de Janeiro, Brazil",
    location: "Rio de Janeiro, Brazil",
  },
];

const TopSearch = (): JSX.Element => {
  return (
    <S.Container>
      <S.Inner>
        <S.LeftNavigationDisclaimer>
          <strong>Buscar Populares:</strong>
          <li>
            <Link href="#">Fashion</Link>
          </li>
          <li>
            <Link href="#">Camiseta Masculina</Link>
          </li>
          <li>
            <Link href="#">Gadgets</Link>
          </li>
          <li>
            <Link href="#">Computador</Link>
          </li>
          <li>
            <Link href="#">Notebook</Link>
          </li>
          <li>
            <Link href="#">Secador</Link>
          </li>
          <li>
            <Link href="#">Barbeador</Link>
          </li>
        </S.LeftNavigationDisclaimer>
        <S.RightNavigationDisclaimer>
          <li>Esconder</li>
        </S.RightNavigationDisclaimer>
      </S.Inner>
    </S.Container>
  );
};

export default TopSearch;
