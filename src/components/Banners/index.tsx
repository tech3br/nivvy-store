import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

// Import Swiper styles
import Image from "next/image";
import Link from "next/link";
import Fresh from "public/images/promo/fresh-arrival.png";
import Offer from "public/images/promo/special-offer.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banners = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.LeftSlider>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href="#">
                <Image src={Fresh} width={322} height={332} alt="Fresh" />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ background: "green" }}>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </S.LeftSlider>
        <S.RightSlider>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            style={{ width: "1024px" }}
          >
            <SwiperSlide>
              <Link href="#">
                <Image src={Offer} width={1024} height={354} alt="Fresh" priority />
              </Link>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </S.RightSlider>
      </S.Inner>
    </S.Container>
  );
};

export default Banners;
