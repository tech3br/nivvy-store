
import Image from "next/image";
import Link from "next/link";
import Fresh from "public/images/promo/fresh-arrival.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomInput from "../CustomInput";
import UnstyledButtonCustom from "../UnstyledButtonCustom";
import * as S from "./styles";


const BillsAndUtility = () => {
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
                <Image src={Fresh} width={322} height={322} alt="Fresh" />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ background: "green" }}>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </S.LeftSlider>
        <S.RightSlider>
          <h4>Cupons e vantagens</h4>
          <S.CustomTabsUnstyled
            style={{ width: "100%" }}
            defaultValue={0}
            selectionFollowsFocus
          >
            <S.TabsList>
              <S.Tab>Cupons</S.Tab>
              <S.Tab>Promos</S.Tab>
              <S.Tab>Internet</S.Tab>
              <S.Tab>Tokens</S.Tab>
              <S.Tab>Ingressos</S.Tab>
              <S.Tab>Parceiros</S.Tab>
              <S.Tab>Pacotes</S.Tab>
              <S.Tab>Pulse</S.Tab>
              <S.Tab>Voucher</S.Tab>
            </S.TabsList>
            <S.TabPanel
              value={0}
              style={{
                padding: "16px 0px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <form
                onSubmit={() => console.log("Dados enviados")}
                style={{
                  display: "flex",
                  gap: "32px",
                  justifyContent: "space-between",
                  margin: 0,
                  padding: 0,
                }}
              >
                <S.CodeTransactionContainer>
                  <p>Código do cupon</p>
                  <CustomInput
                    role="input"
                    placeholder="Ex: 276NHVF387XN3487"
                  />
                  <Link href="/cupons">
                    <UnstyledButtonCustom role="link">
                      Capturar
                      <MdKeyboardArrowRight width={18} height={18} />
                    </UnstyledButtonCustom>
                  </Link>
                </S.CodeTransactionContainer>
                <S.CodeTransactionContainer>
                  <p>Valor do pagamento</p>
                  <CustomInput placeholder="Ex : $100.000" />
                </S.CodeTransactionContainer>
              </form>
            </S.TabPanel>
          </S.CustomTabsUnstyled>
        </S.RightSlider>
      </S.Inner>
    </S.Container>
  );
};

export default BillsAndUtility;
