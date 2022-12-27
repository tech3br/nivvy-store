export type ProductProps = {
  title: string;
  type: string;
  imgSrc?: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  discountText?: string;
  onFav?: () => void;
  soldItems: number;
  totalItems: number;
};
