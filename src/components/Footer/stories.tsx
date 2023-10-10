import { Meta, Story } from '@storybook/react/types-6-0';

import { Footer } from './index';
import { FooterProps } from './index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    copyrightTitle: 'Nivvy Store',
    copyrightDescription: 'Todos os Direitos Reservados',
    year: '2023',
  },
  argTypes: {
    copyrightTitle: { type: "string" },
  },
  parameters: {

  },
} as Meta;

export const Default: Story<FooterProps> = (args) => (
  <div style={{ width: '100%' }}>
    <Footer {...args} />
  </div>
);

