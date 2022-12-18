import Link from "next/link";
import React from "react";
import * as S from "./styles";

const NavigationDisclaimer = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.LeftNavigationDisclaimer>
          <li>
            <Link href="#">Abrir Sponsorship</Link>
          </li>
          <li>
            <Link href="#">Atendimento</Link>
          </li>
          <li>
            <Link href="#">Ajuda</Link>
          </li>
          <li>
            <Link href="#">Tutorial</Link>
          </li>
        </S.LeftNavigationDisclaimer>
        <S.RightNavigationDisclaimer>
          <li>
            <Link href="#">Seja Parceiro</Link>
          </li>
          <li>
            <Link href="#">Loja Aberta</Link>
          </li>
          <li>
            <Link href="#">Baixar</Link>
          </li>
          <li>
            <Link href="#">Português</Link>
          </li>
        </S.RightNavigationDisclaimer>
      </S.Inner>
    </S.Container>
  );
};

export default NavigationDisclaimer;
