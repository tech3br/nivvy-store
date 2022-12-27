import { render, screen } from '../../utils/test-utils';

import UnstyledButtonCustom from ".";

const props = {
  title: "Garrafa Térmica VIP",
  type: "Fitness",
  price: 'R$ 235,00',
  soldItems: 80,
  totalItems: 100,
};

describe("<UnstyledButtonCustom />", () => {
  it("should be render product card", () => {
    const { container } = render(<UnstyledButtonCustom>ola mundo</UnstyledButtonCustom>);

    expect(screen.getByText('ola mundo'))
  });
});
