import { render, screen } from "../../utils/test-utils";

import ProductCard from ".";

const props = {
  title: "Garrafa Térmica VIP",
  type: "Fitness",
  price: "R$ 235,00",
  soldItems: 80,
  totalItems: 100,
};

describe("<ProductCard />", () => {
  it("should be render product card", () => {
    const { container } = render(<ProductCard {...props} />);

    // Verifica se o title existe renderizado no componente
    expect(screen.getByText(/Garrafa Térmica VIP/)).toBeInTheDocument();

    // Verifica se o price existe renderizado no componente
    expect(screen.getByText(`R$ 235,00`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the product card with discountText", () => {
    render(<ProductCard {...props} discountText="-50%" />);

    const discountText = screen.getByText(/-50%/i);

    expect(discountText).toBeInTheDocument();
    expect(discountText).toHaveStyle({ color: "#ff0000" });
    expect(discountText).toHaveStyle({ fontSize: "12px" });
  });
});
