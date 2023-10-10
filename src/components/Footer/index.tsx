import React from 'react';
import { useState } from 'react';
import * as S from './styles';

export interface FooterProps {
  copyrightTitle: string;
  copyrightDescription: string;
  year: string;
}

export const Footer = ({ copyrightTitle, copyrightDescription, year }: FooterProps) => {
  const [yearState, setYearState] = useState<string>();

  const getFullYear = () => {
    const date = new Date();
    const getYear = Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Sao_Paulo'
    }).format(date);
    setYearState(getYear);
  }

  React.useEffect(() => {
    getFullYear();
  }, [])

  console.log();


  return (
    <S.Container>
      <p>{copyrightTitle} - </p>
      <p>{copyrightDescription} - </p>
      <p>{year}</p>
    </S.Container>
  )
}
