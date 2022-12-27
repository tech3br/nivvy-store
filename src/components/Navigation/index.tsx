import Image from "next/image";
import Link from "next/link";
import circleLogo from "public/images/logo/circle-logo.svg";
import { GoSearch } from "react-icons/go";
import { MdNotifications, MdShoppingCart, MdStorefront } from "react-icons/md";
import Select, { StylesConfig } from "react-select";
import * as S from "./styles";

const styles: StylesConfig<ColourOption, false> = {
  singleValue: () => ({
    color: "#fcfcfc",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  }),
  dropdownIndicator: () => ({ color: "#fcfcfc", fontSize: 14 }),
  control: () => ({
    border: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    color: "#fcfcfc"
  }),
  valueContainer: () => ({ display: "flex" }),
};

const filterStyles: StylesConfig<ColourOption, false> = {
  singleValue: () => ({
    color: "#ffffff",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }),
  dropdownIndicator: () => ({ color: "#1e1e1e", fontSize: 14 }),
  control: () => ({
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fbb03b",
    color: "#1e1e1e",
    height: "38px",
    borderRadius: "8px 0px 0px 8px",
    padding: "8px 16px",
  }),
  valueContainer: () => ({ display: "flex", color: "#1e1e1e" }),
  placeholder: () => ({
    fontSize: 14,
    "::placeholder": {
      color: "#fff",
    },
  }),
  input: () => null,
};

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

const Navigation = (): JSX.Element => {
  return (
    <S.Container>
      <S.Inner>
        <S.LogoContainer>
          <Link href="#">
            <Image src={circleLogo} width={35} height={35} alt="Logo Icon" />
            <p>Nivvy</p>
          </Link>
          <S.LocationContainer>
            <Select
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable
              name="emoji"
              noOptionsMessage={() => "Localização não encontrada"}
              options={locations}
              styles={styles}
            />
          </S.LocationContainer>
        </S.LogoContainer>
        <S.SearchBarContainer>
          <input type="text" placeholder="Procurar em Nivvy Shop" />
          <Select
            styles={filterStyles}
            placeholder="Categoria"
            blurInputOnSelect={false}
            components={{ Input: () => null, IndicatorSeparator: () => null }}
          />
          <GoSearch />
        </S.SearchBarContainer>
        <S.ProfileContainer>
          <MdNotifications width={32} height={32} color="#828282" />
          <MdStorefront width={42} height={42} color="#828282" />
          <MdShoppingCart width={42} height={42} color="#828282" />
          <S.ProfilePerson>
            <S.ProfilePersonPicture
              src="https://github.com/tech3br.png"
              width={100}
              height={100}
              alt="Profile Picture"
            />
            <S.ProfilePersonInfo>
              <S.ProfilePersonInfoName>Pikachu</S.ProfilePersonInfoName>
              <S.ProfilePersonInfoStatus>Online</S.ProfilePersonInfoStatus>
            </S.ProfilePersonInfo>
          </S.ProfilePerson>
        </S.ProfileContainer>
      </S.Inner>
    </S.Container>
  );
};

export default Navigation;
