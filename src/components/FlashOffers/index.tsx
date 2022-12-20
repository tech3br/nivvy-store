import { productsOffers } from "src/mocks/productsOffers";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../ProductCard";
import * as S from "./styles";

const FlashOffers = (): JSX.Element => {
  return (
    <S.Container>
      <S.Inner>
        <h1>Ofertas Relâmpago ⚡</h1>
        <S.OffersCardsContainer>
          {productsOffers.map(product => (
            <ProductCard key={product.title} {...product} />
          ))}
        </S.OffersCardsContainer>
      </S.Inner>
    </S.Container>
  );
};

export default FlashOffers;
