import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

import * as S from './styles';
import { ProductProps } from './types';

const ProductCard = ({
  imgSrc,
  discountText,
  price,
  promotionalPrice,
  title,
  type,
  soldItems,
  totalItems,
  favorite,
}: ProductProps) => {
  const [progress] = React.useState(80);

  return (
    <S.Container>
      {favorite ? <FcLike /> : <FcLikePlaceholder />}
      <S.HeaderImage>
        <Image src={imgSrc} fill alt={title} unoptimized />
      </S.HeaderImage>
      <S.ProductCardBody>
        <S.ProductTypeDescription>{type}</S.ProductTypeDescription>
        <S.ProductTypeTitle>{title}</S.ProductTypeTitle>
        <S.PriceContainer>
          <S.ProductPrice>
            {!promotionalPrice ? <strong>{price}</strong> : <s>{price}</s>}
            {promotionalPrice && <strong>{promotionalPrice}</strong>}
          </S.ProductPrice>
          {!!discountText && (
            <S.PromotionDiscount>
              <p>- {discountText}</p>
            </S.PromotionDiscount>
          )}
        </S.PriceContainer>
        <S.ProgressEndPromotion>
          <Box sx={{ height: '10px', width: '100%' }}>
            <S.BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography
            variant="body1"
            style={{ textAlign: 'center' }}
          >{`${soldItems}/${totalItems} vendidos`}</Typography>
        </S.ProgressEndPromotion>
      </S.ProductCardBody>
    </S.Container>
  );
};

export default ProductCard;
