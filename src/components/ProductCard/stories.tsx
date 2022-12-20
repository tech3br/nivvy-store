import { Meta, Story } from "@storybook/react/types-6-0";
import ProductCard from ".";
import { ProductProps } from "./types";

export default {
  title: "ProductCard",
  component: ProductCard,
  args: {
    type: "Fitness",
    favorite: true,
    title: "Garrafa Térmica VIP",
    img: '/public/images/promo/special-offer.png',
    price: "R$ 235,00",
    promotionalPrice: "R$ 200,00",
    soldItems: 80,
    totalItems: 100,
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

export const Default: Story<ProductProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <ProductCard {...args} />
  </div>
);

export const WithDiscount: Story<ProductProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <ProductCard {...args} discountText="50%" />
  </div>
);
